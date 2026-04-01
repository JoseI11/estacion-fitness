import { useEffect, useState } from 'react';

// ─────────────────────────────────────────────────────────────
// CONFIGURACIÓN  →  reemplazar con el ID real del Google Sheet
//
// Cómo obtener el SHEET_ID:
//   1. Abrir el Google Sheet con los precios
//   2. Copiar el ID que aparece en la URL:
//      https://docs.google.com/spreadsheets/d/ [SHEET_ID] /edit
//   3. Pegar ese valor abajo
//
// El sheet debe estar compartido como "Cualquiera con el enlace puede ver",
// NO hace falta publicarlo como página web.
//
// Estructura esperada de las columnas (fila 1 = encabezado):
//   Columna A: Plan         →  Plan Mensual | Plan Semanal | Pase Diario
//   Columna B: Precio       →  $5.000/mes
//   Columna C: Descripcion  →  (opcional) texto breve extra
// ─────────────────────────────────────────────────────────────
const SHEET_ID = 'TU_SHEET_ID_AQUI';

const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;

export interface PlanPrice {
  title: string;
  price: string;
  description?: string;
}

/** Parsea una fila CSV respetando campos entre comillas (RFC 4180). */
function parseCSVRow(row: string): string[] {
  const result: string[] = [];
  let curr = '';
  let inQuote = false;

  for (let i = 0; i < row.length; i++) {
    const ch = row[i];
    if (ch === '"') {
      if (inQuote && row[i + 1] === '"') {
        curr += '"';
        i++;
      } else {
        inQuote = !inQuote;
      }
    } else if (ch === ',' && !inQuote) {
      result.push(curr);
      curr = '';
    } else {
      curr += ch;
    }
  }
  result.push(curr);
  return result;
}

export function usePrices(): { plans: PlanPrice[]; loading: boolean; error: boolean } {
  const [plans, setPlans] = useState<PlanPrice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Si el SHEET_ID no fue configurado todavía, salir sin error
    if (SHEET_ID === 'TU_SHEET_ID_AQUI') {
      setLoading(false);
      return;
    }

    fetch(SHEET_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener precios');
        return res.text();
      })
      .then((csv) => {
        const rows = csv.trim().split('\n').slice(1); // omitir encabezado
        const parsed: PlanPrice[] = rows
          .map((row) => {
            const [title = '', price = '', description = ''] = parseCSVRow(row);
            return {
              title: title.trim(),
              price: price.trim(),
              description: description.trim() || undefined,
            };
          })
          .filter((p) => p.title && p.price);
        setPlans(parsed);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { plans, loading, error };
}
