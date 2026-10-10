// Capa de dominio de "Catalogo de productos": tipos, constantes y reglas de negocio.
// No importa nada de la app (ni fetch, ni Vue, ni Ionic): son funciones puras y por eso
// se prueban facil. Segun el framework (01-architecture/layers-and-state), la capa de
// datos y la de presentacion dependen de esta, nunca al reves.
//
// Los tipos, las constantes y formatCOP ya estan dados. Las TRES funciones del final
// (validateProduct, toProductView y filterProducts) son STUBS: se implementan en la
// Parte 3 y se prueban en la Parte 5.

/** Categorias permitidas (las mismas que valida la API). */
export const CATEGORIES = ['Bebidas', 'Snacks', 'Aseo', 'Hogar']

export const NAME_MAX_LENGTH = 60

/** Con menos unidades que este valor, el producto tiene "Pocas unidades". */
export const LOW_STOCK_LIMIT = 5

/** Un producto tal como lo entrega la API. */
export interface Product {
  id: number
  name: string
  price: number
  category: string
  stock: number
}

/** Datos que escribe la persona en el formulario (aun sin identificador). */
export type ProductDraft = Omit<Product, 'id'>

/** Un producto listo para mostrarse: la pantalla no formatea nada por su cuenta. */
export interface ProductView {
  id: number
  title: string
  priceLabel: string
  category: string
  stockLabel: string
}

/** Resultado de validar un borrador: "errors" trae un mensaje por cada campo invalido. */
export interface ValidationResult {
  isValid: boolean
  errors: Partial<Record<keyof ProductDraft, string>>
}

/**
 * DADO: formatea un valor como pesos colombianos, con punto de miles y sin decimales.
 * formatCOP(1250000) -> "$ 1.250.000"
 */
export function formatCOP(amount: number): string {
  const rounded = Math.round(amount)
  const digits = String(Math.abs(rounded))
  // La expresion regular inserta un punto antes de cada grupo de tres digitos.
  const grouped = digits.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return `${rounded < 0 ? '-' : ''}$ ${grouped}`
}

/**
 * TODO(Parte 3): validar un borrador de producto (las mismas reglas que la API).
 *  - name:     obligatorio (un texto vacio o solo de espacios es invalido) y de maximo
 *              NAME_MAX_LENGTH caracteres.
 *  - price:    numero finito mayor que 0.
 *  - category: una de CATEGORIES.
 *  - stock:    entero mayor o igual que 0.
 * Cada regla incumplida agrega un mensaje en errors[<campo>]; isValid es true solo
 * cuando errors queda vacio.
 *
 * Por ahora acepta todo para que la app compile.
 */
export function validateProduct(draft: ProductDraft): ValidationResult {
  void draft
  return { isValid: true, errors: {} }
}

/**
 * TODO(Parte 3): convertir un Product en un ProductView.
 *  - title:      el nombre sin espacios sobrantes al inicio ni al final.
 *  - priceLabel: formatCOP(price).
 *  - category:   la categoria tal cual.
 *  - stockLabel: "Agotado" si stock es 0; "Pocas unidades" si es menor que
 *                LOW_STOCK_LIMIT; "Disponible" en otro caso.
 *
 * Por ahora devuelve un valor minimo para que la app compile.
 */
export function toProductView(product: Product): ProductView {
  return {
    id: product.id,
    title: product.name,
    priceLabel: '',
    category: product.category,
    stockLabel: '',
  }
}

/**
 * TODO(Parte 3): filtrar la lista por texto y por categoria.
 *  - searchText: el nombre debe contener el texto, sin distinguir mayusculas ni
 *                espacios sobrantes en los extremos. Texto vacio = no filtra.
 *  - category:   igualdad exacta. Cadena vacia ("") = todas las categorias.
 * Devuelve una lista nueva; no modifica la recibida.
 *
 * Por ahora devuelve la lista completa.
 */
export function filterProducts(products: Product[], searchText: string, category: string): Product[] {
  void searchText
  void category
  return products
}
