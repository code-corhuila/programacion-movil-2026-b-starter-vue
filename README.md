# Starter Ionic Vue — Parcial práctico C2 · Programación Móvil 2026-B

Proyecto base del parcial práctico del corte 2 (CORHUILA). El trabajo es **individual** y el enunciado oficial (PDF) es la fuente de verdad; este archivo es solo un resumen.

Se construye un **catálogo de productos con API propia**: una API REST con Node.js y Express (`server/`), una app Ionic Vue (`src/`) que la consume, un ejercicio de Kotlin (`kotlin/`) y la documentación según el Mobile Governance Framework (`docs/`).

Pila: Ionic 9 (`@ionic/vue`) · Vue 3.5 · TypeScript · Vite 8 · Vue Router 5 · Vitest 4 · Express 5.

## Cómo ejecutar

Se requiere Node.js 22.12 o superior (`node --version`).

```bash
npm install            # instala las dependencias (node_modules no se versiona)
# opcional: copiar .env.example como .env (sin .env la app usa http://localhost:3000)
npm run server         # API en http://localhost:3000/api/products
npm run dev            # app en http://localhost:5173 (en otra terminal)
```

La API y la app se ejecutan al mismo tiempo, cada una en su terminal. La API guarda los datos en memoria: al reiniciarla vuelven los 8 productos de `server/data/products.json`.

En el starter la API responde `501 Not implemented` en los cinco endpoints, y las pantallas son esqueletos. Las rutas ya existen: `/productos`, `/productos/nuevo`, `/productos/1` y `/productos/1/editar`.

## Cómo probar

```bash
npm test               # pruebas de la app y de la API (Vitest, una sola vez)
npm run test:watch     # modo interactivo
npm run lint           # ESLint
npm run build          # verifica tipos y compila para producción
```

El starter trae pruebas de ejemplo que ya pasan: `formatCOP` (unitaria), `getProducts` (cliente con `fetch` simulado) y una prueba de API (ruta desconocida → 404) que usa el ayudante dado `server/__tests__/start-test-server.js`. Las pruebas nuevas se agregan en `src/features/products/__tests__/` y `server/__tests__/`.

## Estructura

```
server/                    API de Express
  app.js                   createApp(): rutas por implementar (501) + piezas dadas (CORS, JSON, 404, errores)
  index.js                 arranque en PORT o 3000
  data/products.json       8 productos de ejemplo (ids 1 a 8)
  __tests__/               ayudante startTestServer() y prueba de ejemplo
kotlin/Product.kt          ejercicio de Kotlin (esqueleto)
docs/                      plantillas del framework (se copian y se llenan)
src/app/                   arranque, rutas y tema
src/features/products/
  data/                    config.ts, api-error.ts (dados) y products-api.ts (getProducts resuelta)
  domain/                  tipos, formatCOP (dada) y funciones por implementar
  presentation/            páginas, ProductCard (por hacer) y EmptyState (dado, de modelo)
  __tests__/               pruebas
```

Las marcas `TODO(Parte N)` en el código indican dónde trabajar; las marcas `DADO` indican piezas ya resueltas que se usan y se explican, no se reescriben.

## Reglas del framework

El proyecto sigue el [Mobile Governance Framework](https://github.com/jesusarielgb-works/mobile-governance-framework): estructura por funcionalidad (`project-structure`), capas `data` / `domain` / `presentation` (`layers-and-state`), nombres según `coding-standards` (PascalCase en tipos y componentes, camelCase en variables, constantes en UPPER_SNAKE_CASE, booleanos con prefijo `is`, `has` o `should`) y la lista de verificación de `docs/definition-of-done.md`.

## Entrega

1. Hacer fork de este repositorio y trabajar en una rama `feature/…` (por ejemplo `feature/productos`).
2. Hacer al menos 6 commits con Conventional Commits (`tipo(alcance): resumen`); el commit de documentación va antes del primer commit de código.
3. Abrir un Pull Request hacia el `main` del propio fork, con descripción y el checklist del DoD marcado.
4. Pegar el enlace del PR en la actividad de Moodle (texto en línea).

No se versionan `node_modules` ni el archivo `.env`; solo `.env.example`. La ventana de entrega cierra el sábado 10 de octubre de 2026 a las 11:59 p. m., sin entregas tardías.

---

<!-- TODO(Parte 6): actualice este README con la forma de ejecutar el proyecto (si cambió algo). -->
<!-- TODO(Parte 7): agregue debajo dos secciones en inglés, de 3 a 5 frases cada una:
     "State management decision" y "API error handling". -->
