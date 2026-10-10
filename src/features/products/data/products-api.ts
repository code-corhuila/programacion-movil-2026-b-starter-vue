// Cliente HTTP de la API de productos (capa de datos).
// Solo esta capa conoce fetch y las rutas de la API. Entrega objetos del dominio
// (Product) o lanza ApiError.
//
// getProducts ya esta resuelta COMO EJEMPLO: observe como distingue el error de red
// (fetch lanza) de una respuesta no exitosa (response.ok es false). Las otras cuatro
// funciones se escriben (Parte 3) replicando ese mismo patron.

import { API_URL } from './config'
import { ApiError } from './api-error'
import type { Product, ProductDraft } from '../domain/product'

const PRODUCTS_URL = `${API_URL}/api/products`

/** DADO: arma un ApiError a partir de una respuesta no exitosa de la API. */
async function readApiError(response: Response): Promise<ApiError> {
  try {
    const body = await response.json()
    return new ApiError(body.error ?? `Error ${response.status}`, response.status, body.details ?? [])
  } catch {
    // La respuesta no traia JSON (por ejemplo, un error de un proxy).
    return new ApiError(`Error ${response.status}`, response.status)
  }
}

/** RESUELTA (ejemplo): GET /api/products */
export async function getProducts(): Promise<Product[]> {
  let response: Response
  try {
    response = await fetch(PRODUCTS_URL)
  } catch {
    // Error de red: no hubo respuesta del servidor.
    throw new ApiError('No se pudo conectar con el servidor. Verifique que la API esté en ejecución.', null)
  }
  if (!response.ok) {
    // Respuesta no exitosa: el servidor contesto con 400, 404, 500...
    throw await readApiError(response)
  }
  return (await response.json()) as Product[]
}

/** TODO(Parte 3): GET /api/products/:id (400 y 404 llegan como ApiError). */
export async function getProduct(id: number): Promise<Product> {
  void id
  throw new Error('TODO(Parte 3): getProduct')
}

/** TODO(Parte 3): POST /api/products con el borrador como JSON (cabecera Content-Type). */
export async function createProduct(draft: ProductDraft): Promise<Product> {
  void draft
  throw new Error('TODO(Parte 3): createProduct')
}

/** TODO(Parte 3): PUT /api/products/:id con el borrador como JSON. */
export async function updateProduct(id: number, draft: ProductDraft): Promise<Product> {
  void id
  void draft
  throw new Error('TODO(Parte 3): updateProduct')
}

/** TODO(Parte 3): DELETE /api/products/:id (la API responde 204 sin cuerpo). */
export async function deleteProduct(id: number): Promise<void> {
  void id
  throw new Error('TODO(Parte 3): deleteProduct')
}
