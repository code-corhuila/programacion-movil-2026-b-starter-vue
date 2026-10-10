# TODO — Parcial práctico C2 (Ionic Vue · v2)

Lista de lo que se debe implementar, por parte. Marque cada casilla al terminar. Esfuerzo sugerido: de 6 a 8 horas repartidas en el día. El enunciado en PDF manda sobre este archivo.

Lo marcado como **DADO** en el código ya está resuelto: se usa y se explica (ADR-002 y la sección «API error handling»), no se reescribe.

## Parte 1 — Documentar antes de codificar (0,75)

Todos los documentos se crean desde su plantilla en `docs/` y se llenan con el contenido propio (una copia sin cambios no cuenta).

- [ ] 1. `docs/features/productos.md` (de `_template-feature.md`): propósito, pantallas, estado, datos, criterios de aceptación y estados (carga, vacío, sin resultados, error).
- [ ] 2. `docs/screens/*.md` (de `_template-screen.md`): al menos tres de las cuatro pantallas (lista, detalle, nuevo, editar).
- [ ] 3. `docs/decisions/ADR-001-estado.md` (de `_template-adr.md`): contexto, decisión y consecuencias sobre cómo se maneja el estado de las pantallas.
- [ ] 4. `docs/decisions/ADR-002-consumo-api.md`: cómo la app consume la API (cliente `fetch`, `ApiError`, error de red frente a respuesta no exitosa, `VITE_API_URL`, CORS).
- [ ] 5. `docs/api/products-endpoints.md` (de `_template-endpoint-integration.md`): los 5 endpoints con petición, respuesta y errores.
- [ ] 6. `docs/api/product-entity.md` (de `_template-entity.md`): campos y reglas del producto; en persistencia puede indicarse «N/A (almacenamiento en memoria)».
- [ ] 7. Commit de documentación **antes** del primer commit de código (por ejemplo `docs(products): add feature, screens, ADRs and API docs`).

## Parte 2 — API Express (1,0) · `server/app.js`

- [ ] 8. `validateProductInput(body)`: `name` texto no vacío (máximo 60), `price` número mayor que 0, `category` una de `["Bebidas","Snacks","Aseo","Hogar"]`, `stock` entero mayor o igual que 0; un mensaje en `details` por regla incumplida.
- [ ] 9. `GET /api/products` con filtros `search` (nombre que contenga el texto, sin distinguir mayúsculas) y `category` (exacta), leídos de `req.query`.
- [ ] 10. `GET /api/products/:id` → 200, 400 si el id no es numérico (use `parseId`), 404 si no existe.
- [ ] 11. `POST /api/products` → 201 con el objeto creado (id incremental) o 400 con `{ error, details }`.
- [ ] 12. `PUT /api/products/:id` → 200 con el objeto actualizado, 400 o 404.
- [ ] 13. `DELETE /api/products/:id` → 204 sin cuerpo, 400 o 404.
- [ ] 14. Verificar con las pruebas de la Parte 5 que los códigos y el formato `{ error, details }` son exactos, y entender las piezas dadas (CORS, `express.json()`, manejador 404 y manejador de errores 500).

## Parte 3 — App Ionic Vue (1,5) · `src/features/products/`

- [ ] 15. `domain/product.ts`: `validateProduct()`, `toProductView()` (usa `formatCOP` y la etiqueta de stock) y `filterProducts()`.
- [ ] 16. `data/products-api.ts`: `getProduct`, `createProduct`, `updateProduct` y `deleteProduct`, replicando el patrón de `getProducts` (error de red frente a respuesta no exitosa, siempre con `ApiError`).
- [ ] 17. `presentation/ProductCard.vue`: componente reutilizable con props tipadas, por analogía con `EmptyState.vue`.
- [ ] 18. `presentation/ProductListPage.vue`: lista con buscador, filtro por categoría (un `ion-button` por categoría) y los cuatro estados: cargando, vacío, sin resultados y error con botón «Reintentar».
- [ ] 19. `presentation/ProductDetailPage.vue`: todos los campos, botón «Editar», botón «Eliminar» con confirmación en pantalla y botón para volver.
- [ ] 20. `presentation/ProductFormPage.vue`: formulario de crear y editar con validación en línea (`validateProduct`) y los mensajes del servidor cuando la API rechaza.
- [ ] 21. Navegación completa entre `/productos`, `/productos/nuevo`, `/productos/:id` y `/productos/:id/editar`.
- [ ] 22. Nombres según `coding-standards` (PascalCase en tipos y componentes, camelCase en variables y funciones, booleanos con prefijo `is`, `has` o `should`, constantes en UPPER_SNAKE_CASE).

## Parte 4 — Kotlin (0,5) · `kotlin/Product.kt`

- [ ] 23. Clase `Product` (con `val` y `var` donde corresponda y un campo opcional).
- [ ] 24. `stockLabel(stock: Int?)` y `applyDiscount(price: Double, percent: Int)`.
- [ ] 25. `main()` que imprime 3 productos con su etiqueta de stock y el precio con descuento. Debe compilar o correr en el Kotlin Playground.

## Parte 5 — Calidad (0,5)

- [ ] 26. Al menos 2 pruebas unitarias nuevas (`validateProduct`, `toProductView` o `filterProducts`) en `src/features/products/__tests__/`.
- [ ] 27. Al menos 2 pruebas de API nuevas en `server/__tests__/` con `startTestServer()` (por ejemplo: POST inválido → 400 y GET inexistente → 404). Una de ellas debe provocar un 404 o un 500 y comprobar el formato de error.
- [ ] 28. `npm test` pasa completo (incluidas las pruebas de ejemplo).
- [ ] 29. Copiar el checklist de `docs/definition-of-done.md` a la descripción del PR y marcar lo cumplido.
- [ ] 30. Ningún secreto en el repositorio: `.env` está ignorado y solo se versiona `.env.example`.

## Parte 6 — Git y entrega (0,25)

- [ ] 31. Trabajar en una rama `feature/…` (o `feat/…`) creada desde `main`.
- [ ] 32. Al menos **6 commits** con Conventional Commits: `tipo(alcance): resumen` (por ejemplo `feat(api): add products endpoints`).
- [ ] 33. Abrir un PR hacia el `main` del **propio fork**, con descripción.
- [ ] 34. README con la forma de ejecutar el proyecto (`npm run server` y `npm run dev`).
- [ ] 35. Pegar el enlace del PR en la actividad de Moodle (texto en línea) antes del sábado 10 de octubre a las 11:59 p. m.

## Parte 7 — Inglés (0,5)

- [ ] 36. En `README.md`, sección **State management decision** (3 a 5 frases en inglés): por qué se eligió ese manejo de estado y qué cambiaría si la aplicación creciera.
- [ ] 37. En `README.md`, sección **API error handling** (3 a 5 frases en inglés): cómo responde la API a los errores (400, 404, 500) y cómo la app distingue un error de red de una respuesta no exitosa.

## Antes de entregar

- [ ] `npm test` en verde
- [ ] `npm run lint` y `npm run build` sin errores
- [ ] Ninguna marca `TODO(Parte N)` pendiente en el código
