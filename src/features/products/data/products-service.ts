// Servicio de datos de productos (YA DADO: no hace falta modificarlo).
// Lee src/data/products.json, simula 400 ms de latencia y puede simular un error.
//
// Como simular el error (para probar el estado de error de la lista):
//  - abrir la app con ?error=1 en la URL (ej.: http://localhost:5173/productos?error=1), o
//  - poner VITE_SIMULATE_ERROR=true en el archivo .env, o
//  - llamar a setErrorSimulation(true) desde el codigo o desde una prueba.

import productsData from '@/data/products.json'
import type { Product, ProductDraft } from '../model/product'

export const SIMULATED_LATENCY_MS = 400

/** Error que lanza el servicio (el codigo permite distinguir el caso en la UI). */
export class ProductsServiceError extends Error {
  readonly code: 'NETWORK' | 'NOT_FOUND'

  constructor(code: 'NETWORK' | 'NOT_FOUND', message: string) {
    super(message)
    this.name = 'ProductsServiceError'
    this.code = code
  }
}

function readErrorFlag(): boolean {
  if (import.meta.env.VITE_SIMULATE_ERROR === 'true') return true
  if (typeof window === 'undefined') return false
  return new URLSearchParams(window.location.search).get('error') === '1'
}

// La bandera se lee al cargar el modulo para que sobreviva a la navegacion
// interna (el router cambia la URL y se perderia el ?error=1).
let isErrorSimulated = readErrorFlag()

// "Base de datos" en memoria: se reinicia al recargar la pagina.
let products: Product[] = (productsData as Product[]).map((item) => ({ ...item }))

export function setErrorSimulation(isEnabled: boolean): void {
  isErrorSimulated = isEnabled
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function simulateRequest(): Promise<void> {
  await wait(SIMULATED_LATENCY_MS)
  if (isErrorSimulated) {
    throw new ProductsServiceError('NETWORK', 'No se pudo conectar con el servidor.')
  }
}

export async function getProducts(): Promise<Product[]> {
  await simulateRequest()
  return products.map((item) => ({ ...item }))
}

export async function getProduct(id: number): Promise<Product> {
  await simulateRequest()
  const found = products.find((item) => item.id === id)
  if (!found) {
    throw new ProductsServiceError('NOT_FOUND', `No existe el producto ${id}.`)
  }
  return { ...found }
}

export async function createProduct(draft: ProductDraft): Promise<Product> {
  await simulateRequest()
  const nextId = products.reduce((max, item) => Math.max(max, item.id), 0) + 1
  const created: Product = { id: nextId, ...draft }
  products = [...products, created]
  return { ...created }
}

/** Solo para pruebas: restaura los datos originales del JSON y apaga el error. */
export function resetProductsService(): void {
  products = (productsData as Product[]).map((item) => ({ ...item }))
  isErrorSimulated = false
}
