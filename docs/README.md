# docs/

Documentación del proyecto. Las plantillas `_template-*` y `definition-of-done.md` provienen del
[Mobile Governance Framework](https://github.com/jesusarielgb-works/mobile-governance-framework)
(licencia MIT, © 2026 Jesus Ariel Gonzalez Bonilla; ver `LICENSE-mobile-governance-framework.txt`) y se copiaron sin cambios.

**Las plantillas no se editan: se copian y se llenan.** Los documentos se escriben **antes** del primer commit de código.

| Documento que se crea | A partir de | Parte |
|---|---|---|
| `features/productos.md` | `features/_template-feature.md` | 1 |
| `screens/<pantalla>.md` (al menos tres de las cuatro pantallas) | `screens/_template-screen.md` | 1 |
| `decisions/ADR-001-estado.md` (cómo se maneja el estado de la app) | `decisions/_template-adr.md` | 1 |
| `decisions/ADR-002-consumo-api.md` (cómo la app consume la API) | `decisions/_template-adr.md` | 1 |
| `api/products-endpoints.md` (los 5 endpoints; una sección por endpoint) | `api/_template-endpoint-integration.md` | 1 |
| `api/product-entity.md` (el producto y su almacenamiento) | `api/_template-entity.md` | 1 |

`definition-of-done.md` es la lista de verificación que se marca en la descripción del PR (Parte 5).

## Capas del código (framework `01-architecture/layers-and-state`)

El framework separa tres responsabilidades y fija la dirección de las dependencias. En el proyecto se
llaman igual que en el framework y viven dentro de `src/features/products/`:

| Carpeta | Responsabilidad | Puede depender de |
|---|---|---|
| `presentation/` | Pantallas y componentes: pintan el estado y reciben las acciones de la persona | `domain/`, `data/` |
| `domain/` | Tipos y reglas de negocio puras (`validateProduct`, `toProductView`, `filterProducts`, `formatCOP`) | nada |
| `data/` | Cliente HTTP de la API (`fetch`), configuración y `ApiError` | `domain/` |

`domain/` no importa nada de la app: ni `fetch`, ni Vue, ni Ionic. Por eso sus funciones se prueban sin navegador.
