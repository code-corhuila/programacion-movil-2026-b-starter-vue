# Starter Ionic Vue — Parcial práctico C2 · Programación Móvil 2026-B

Proyecto base del parcial práctico del corte 2 (CORHUILA). Se trabaja de forma **individual** y el enunciado oficial (PDF) es la fuente de verdad; este archivo es solo un resumen.

Pila: Ionic 9 (`@ionic/vue`) · Vue 3.5 · TypeScript · Vite 8 · Vue Router 5 · Vitest.

## Cómo ejecutar

Se requiere Node.js 20 o superior.

```bash
npm install        # instala las dependencias (genera node_modules, que no se versiona)
npm run dev        # abre la app en http://localhost:5173
```

Rutas que ya se pueden recorrer: `/productos`, `/productos/1` y `/productos/nuevo`. Para ver el estado de error de la lista, abra `http://localhost:5173/productos?error=1`.

## Cómo probar

```bash
npm test           # ejecuta las pruebas una vez (Vitest)
npm run test:watch # modo interactivo
npm run lint       # revisa el código con ESLint
npm run build      # verifica tipos y compila para producción
```

El starter incluye una prueba de ejemplo (`src/features/products/__tests__/product.test.ts`) que ya pasa. Las dos pruebas nuevas se agregan en ese mismo directorio.

## Qué se pide (resumen)

| Parte | Tema | Puntos |
|---|---|---|
| 1 | Documentar antes de codificar (feature, pantallas y ADR) | 1,0 |
| 2 | Construir lista, detalle y formulario | 2,0 |
| 3 | Calidad: pruebas, checklist del DoD y sin secretos | 1,0 |
| 4 | Git y entrega: rama, commits convencionales, PR y README | 0,5 |
| 5 | Inglés: sección «State management decision» en este README | 0,5 |

El detalle de cada parte está en [`TODO.md`](./TODO.md).

## Estructura

```
docs/                      plantillas del Mobile Governance Framework (se copian y se llenan)
src/app/                   arranque, rutas y tema
src/data/products.json     8 productos de ejemplo
src/features/products/
  data/products-service.ts servicio dado: latencia de 400 ms y error simulado
  model/product.ts         tipos dados; toProductView() y validateProduct() por implementar
  ui/                      páginas y ProductCard (esqueletos con marcas TODO)
  __tests__/               pruebas
```

Las marcas `TODO(Parte N)` en el código indican dónde trabajar.

## Reglas del framework

El proyecto sigue el [Mobile Governance Framework](https://github.com/jesusarielgb-works/mobile-governance-framework): estructura por funcionalidad (`project-structure`), nombres según `coding-standards` (PascalCase en tipos y componentes, camelCase en variables, booleanos con prefijo `is`, `has` o `should`) y la lista de verificación de `docs/definition-of-done.md`.

## Entrega

1. Hacer fork de este repositorio y trabajar en la rama `feature/productos`.
2. Abrir un Pull Request hacia el `main` del propio fork, con descripción y el checklist del DoD marcado.
3. Pegar el enlace del PR en la actividad de Moodle (texto en línea).

No se versionan `node_modules` ni el archivo `.env`; solo `.env.example`.

---

<!-- TODO(Parte 4): actualice este README con la forma de ejecutar el proyecto (si cambió algo). -->
<!-- TODO(Parte 5): agregue debajo una sección titulada "State management decision",
     de 3 a 5 frases en inglés. -->
