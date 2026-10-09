# TODO — Parcial práctico C2 (Ionic Vue)

Lista de lo que se debe implementar. Marque cada casilla al terminar. Tiempo total: 90 minutos. El enunciado en PDF manda sobre este archivo.

## Parte 1 — Documentar antes de codificar (15 min · 1,0 punto)

- [ ] 1. Copiar `docs/features/_template-feature.md` como `docs/features/productos.md` y llenarlo: objetivo, criterios de aceptación y estados (carga, vacío, error).
- [ ] 2. Copiar `docs/screens/_template-screen.md` y documentar **al menos dos pantallas** (por ejemplo `docs/screens/lista-productos.md` y `docs/screens/formulario-producto.md`).
- [ ] 3. Copiar `docs/decisions/_template-adr.md` como `docs/decisions/ADR-001-estado.md` con contexto, decisión y consecuencias (cómo se manejará el estado de la lista y del formulario).
- [ ] 4. Hacer el commit de documentación **antes** del primer commit de código (por ejemplo `docs(products): add feature, screens and ADR-001`).

## Parte 2 — Construir (40 min · 2,0 puntos)

Todo el código va en `src/features/products/`.

- [ ] 5. `model/product.ts`: implementar `toProductView()` según el contrato del comentario (precio con dos decimales, etiqueta de existencias, indicador de stock bajo).
- [ ] 6. `model/product.ts`: implementar `validateProduct()` (nombre obligatorio y precio mayor que 0, con un mensaje por campo inválido).
- [ ] 7. `ui/ProductCard.vue`: componente reutilizable que recibe el producto por **props** y muestra nombre, precio y categoría.
- [ ] 8. `ui/ProductListPage.vue`: lista con al menos 6 productos del JSON, usando `ProductCard`, con los tres estados: **carga**, **vacío** y **error** (con botón para reintentar).
- [ ] 9. `ui/ProductDetailPage.vue`: detalle del producto, con su manejo de carga y de error.
- [ ] 10. `ui/ProductFormPage.vue`: formulario que valida con `validateProduct()`, muestra los mensajes junto a cada campo y, si es válido, crea el producto con `createProduct()` y regresa a la lista.
- [ ] 11. Navegación completa: lista → detalle, lista → formulario, y regreso a la lista después de crear.
- [ ] 12. Nombres según `coding-standards`: PascalCase en tipos y componentes, camelCase en variables y funciones, booleanos con prefijo `is`, `has` o `should`, constantes en UPPER_SNAKE_CASE.

## Parte 3 — Calidad (15 min · 1,0 punto)

- [ ] 13. Una prueba nueva de `validateProduct()` en `src/features/products/__tests__/` (casos válido e inválidos).
- [ ] 14. Una prueba nueva de `toProductView()` en `src/features/products/__tests__/`.
- [ ] 15. `npm test` pasa completo (incluida la prueba de ejemplo).
- [ ] 16. Copiar el checklist de `docs/definition-of-done.md` a la descripción del PR y marcar lo cumplido.
- [ ] 17. Ningún secreto en el repositorio: `.env` está ignorado y solo se versiona `.env.example`.

## Parte 4 — Git y entrega (10 min · 0,5 puntos)

- [ ] 18. Trabajar en la rama `feature/productos`, creada desde `main`.
- [ ] 19. Al menos **4 commits** con Conventional Commits: `tipo(alcance): resumen` (por ejemplo `feat(products): add product list`).
- [ ] 20. Abrir un PR hacia el `main` del **propio fork**, con descripción.
- [ ] 21. Actualizar este `README.md` con la forma de ejecutar el proyecto.
- [ ] 22. Pegar el enlace del PR en la actividad de Moodle (texto en línea).

## Parte 5 — Inglés (10 min · 0,5 puntos)

- [ ] 23. En `README.md`, agregar una sección titulada **State management decision** con 3 a 5 frases en inglés: por qué se eligió el patrón de estado (`ref`, `reactive` o un store) y qué cambiaría si la aplicación creciera.

## Antes de entregar

- [ ] `npm test` en verde
- [ ] `npm run build` sin errores
- [ ] Ninguna marca `TODO(Parte N)` pendiente en el código
