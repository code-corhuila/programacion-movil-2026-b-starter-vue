// Modelo de la funcionalidad "Catalogo de productos".
// Los tipos y las constantes ya estan dados. Las DOS funciones del final
// (toProductView y validateProduct) son STUBS: se implementan en la Parte 2
// y se prueban en la Parte 3.

/** Un producto tal como lo entrega el servicio (y como esta en products.json). */
export interface Product {
  id: number
  name: string
  price: number
  category: string
  stock: number
}

/** Datos que escribe el usuario en el formulario (aun sin identificador). */
export type ProductDraft = Omit<Product, 'id'>

/** Un producto listo para mostrarse en pantalla. */
export interface ProductView {
  id: number
  title: string
  priceLabel: string
  category: string
  stockLabel: string
  isLowStock: boolean
}

/** Resultado de validar un borrador: errors trae un mensaje por cada campo invalido. */
export interface ValidationResult {
  isValid: boolean
  errors: Partial<Record<keyof ProductDraft, string>>
}

/** Con este stock (o menos) un producto se considera de existencias bajas. */
export const LOW_STOCK_THRESHOLD = 5

/**
 * TODO(Parte 2): convertir un Product en un ProductView.
 *
 * Contrato que las pruebas de la Parte 3 pueden asumir:
 *  - title:      el nombre sin espacios sobrantes al inicio ni al final.
 *  - priceLabel: el simbolo "$" seguido del precio con dos decimales (59.9 -> "$59.90").
 *  - category:   la categoria tal cual.
 *  - stockLabel: "Sin existencias" si stock es 0; en otro caso "<stock> disponibles".
 *  - isLowStock: true cuando stock <= LOW_STOCK_THRESHOLD.
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
    isLowStock: false,
  }
}

/**
 * TODO(Parte 2): validar un borrador de producto.
 *
 * Reglas de la Parte 2:
 *  - name:  obligatorio (un texto vacio o de solo espacios es invalido).
 *  - price: debe ser un numero mayor que 0.
 *  - Cada regla incumplida agrega un mensaje en errors[<campo>].
 *  - isValid es true solo cuando errors queda vacio.
 *
 * Por ahora acepta todo para que la app compile.
 */
export function validateProduct(draft: ProductDraft): ValidationResult {
  void draft
  return { isValid: true, errors: {} }
}
