import { useEffect, useState } from 'react';

const SHEET_ID = '1pR3v0OVtJuz6RoeUy42SaHAuHRfk7dUjYYbvjq911CU';
// Endpoint directo de Google — no usa ningún intermediario, los cambios se ven en segundos
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Precios`;

export interface PrecioFila {
  cantidadDias: string;
  cantidadSemanas: string;
  precio: string;
  etiqueta?: string;
}

export interface ClasePrecios {
  clase: string;
  filas: PrecioFila[];
}

// Cache en memoria: persiste mientras la pestaña esté abierta.
// Si el usuario ya visitó /precios antes, los datos se muestran de inmediato.
let cachedClases: ClasePrecios[] | null = null;

function parseData(data: Record<string, string>[]): ClasePrecios[] {
  const map = new Map<string, PrecioFila[]>();
  for (const row of data) {
    const clase = row['Clase']?.trim() ?? '';
    if (!clase) continue;
    const fila: PrecioFila = {
      cantidadDias: row['Cantidad Dias']?.trim() ?? '',
      cantidadSemanas: row['Cantidad Semanas']?.trim() ?? '',
      precio: row['Precio']?.trim() ?? '',
    };
    if (!map.has(clase)) map.set(clase, []);
    map.get(clase)!.push(fila);
  }
  return Array.from(map.entries()).map(([clase, filas]) => ({ clase, filas }));
}

export function usePrices(): { clases: ClasePrecios[]; loading: boolean; error: boolean } {
  // Si ya hay datos en caché, arrancamos con loading=false y los datos listos
  const [clases, setClases] = useState<ClasePrecios[]>(cachedClases ?? []);
  const [loading, setLoading] = useState(cachedClases === null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Si ya tenemos datos en caché, no hace falta volver a fetchear
    if (cachedClases !== null) return;

    fetch(SHEET_URL, { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener precios');
        return res.text();
      })
      .then((text) => {
        // Google devuelve /*O_o*/\ngoogle.visualization.Query.setResponse({...});
        // Hay que extraer el JSON del interior
        const match = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*)\);?\s*$/);
        if (!match) throw new Error('Formato inesperado');
        const gviz = JSON.parse(match[1]);
        const cols: string[] = gviz.table.cols.map((c: { label: string }) => c.label);
        const rows: Record<string, string>[] = gviz.table.rows.map(
          (row: { c: ({ v: unknown } | null)[] }) => {
            const obj: Record<string, string> = {};
            row.c.forEach((cell, i) => {
              obj[cols[i]] = cell?.v != null ? String(cell.v) : '';
            });
            return obj;
          },
        );
        const parsed = parseData(rows);
        cachedClases = parsed;
        setClases(parsed);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { clases, loading, error };
}
