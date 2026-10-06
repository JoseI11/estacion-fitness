# Estación Fitness — Digitalización y automatización

Solución para digitalizar la gestión administrativa de un gimnasio local de Rafaela (Santa Fe, Argentina): registro de alumnos, reportes automáticos y precios del sitio web editables sin tocar código.

**Demo:** [www.estacionfitness.com](https://www.estacionfitness.com)
**Período:** marzo 2026 – abril 2026 · **Tipo:** proyecto freelance
 
### Capturas del sitio

<img width="2221" height="1100" alt="FireShot Capture 004 - Estación Fitness - Entrená en Rafaela -  www estacionfitness com" src="https://github.com/user-attachments/assets/4ba53c09-dcb1-4816-a782-b460bfdd0bd5" />
<br>
<img width="2221" height="1100" alt="FireShot Capture 005 - Formulario alumnos Estación Fitness -  docs google com" src="https://github.com/user-attachments/assets/6432192f-4b23-4d68-9d42-33dc6782b7d0" />
<br>
<img width="2331" height="1100" alt="FireShot Capture 006 - Precios - Estación Fitness -  www estacionfitness com" src="https://github.com/user-attachments/assets/f2facb6b-65ba-4368-bebd-5a92cca25709" />

<!-- Reemplazá por una captura real. Si muestra datos de alumnos, anonimizalos o usá datos de prueba. -->

---

## El problema

El gimnasio llevaba el registro de alumnos de forma manual y en papel. Eso generaba:

- Información dispersa y difícil de consultar.
- Tiempo perdido armando reportes a mano.
- Cada cambio de precios en la web requería modificar el código.

## La solución

| Necesidad | Qué hice |
|---|---|
| Registrar alumnos | Formulario digital con **Google Forms**, conectado a **Google Sheets** como base de datos central |
| Reportes | Reportes individuales y generales generados automáticamente con **Google Apps Script** |
| Precios de la web | El sitio lee los precios desde **Google Sheets**, así el dueño los actualiza desde una planilla |

## Cómo funciona

```
Alumno / recepción
        │
        ▼
 Google Forms ──► Google Sheets (datos centralizados)
                      │            │
                      ▼            ▼
          Google Apps Script     Sitio web
        (reportes automáticos)  (precios dinámicos)
```

<!-- Si podés, reemplazá este esquema por un diagrama o una captura de la planilla (sin datos reales). -->

## Tecnologías

- Google Forms
- Google Sheets
- Google Apps Script (JavaScript)
- [Completá: tecnología del sitio web, por ejemplo HTML/CSS/JS, React, WordPress, etc.]

## Mi rol

Desarrollé la solución **de punta a punta**: relevé cómo trabajaban, diseñé la estructura de datos, programé las automatizaciones, integré los precios con el sitio y lo dejé funcionando para el uso diario del gimnasio.

<!-- Si hubo otras personas involucradas, aclará qué hiciste vos y qué hicieron ellas. -->

## El proceso

1. **Relevamiento:** hablé con [el dueño / el personal] para entender cómo registraban alumnos y qué reportes necesitaban.
2. **Diseño de los datos:** definí qué columnas y campos hacían falta para que la información fuera consistente. [Completá una decisión concreta, por ejemplo: validaciones del formulario, formato de fechas, etc.]
3. **Formulario y planilla:** armé el formulario y lo conecté con la hoja de cálculo.
4. **Automatización de reportes:** programé scripts en Apps Script para generar los reportes individuales y generales.
5. **Precios dinámicos:** conecté el sitio con Google Sheets para leer los precios desde ahí. [Completá cómo lo hiciste: publicación de la hoja, Apps Script como endpoint, etc.]
6. **Pruebas y entrega:** probé con [datos de prueba / casos reales] y le expliqué al gimnasio cómo usarlo.

## Desafíos y qué aprendí

- **[Desafío 1]:** [qué problema apareció y cómo lo resolviste.]
- **[Desafío 2]:** [por ejemplo: límites de Apps Script, permisos, formato de datos.]
- **Aprendizaje:** [una cosa que harías distinta hoy.]

## Cómo usé IA

Usé [Claude / ChatGPT / GitHub Copilot] como apoyo durante el desarrollo, por ejemplo para [sugerir una estructura de script, explicar un error, etc.].

**Cómo validé lo que generó:**
- Leí y entendí el código antes de usarlo.
- Lo probé con datos de prueba.
- [Ejemplo concreto: "La IA propuso X, pero encontré que Y, entonces lo cambié por Z."]

## Resultados

- Se reemplazaron los registros en papel por formularios digitales.
- Los reportes pasaron de armarse a mano a generarse automáticamente.
- El dueño actualiza los precios de la web desde una planilla.
- [Si tenés un dato real, agregalo: tiempo ahorrado, cantidad de alumnos cargados, etc. No inventes números.]

## Qué quedaría por mejorar

- [Por ejemplo: avisos automáticos de cuotas vencidas, un panel de métricas, etc.]

---

**Autor:** José Imhoff · [LinkedIn](https://linkedin.com/in/joseimhoff) · [Portfolio](https://dev.joseimhoff.com)
