import { afterEach, describe, expect, it } from 'vitest'
import {
  getProduct,
  getProducts,
  ProductsServiceError,
  resetProductsService,
  setErrorSimulation,
} from '../data/products-service'

// PRUEBA DE EJEMPLO (ya dada): sirve para que `npm test` corra desde el inicio
// y para ver como se escribe una prueba en este proyecto.
describe('products-service (ejemplo dado)', () => {
  afterEach(() => {
    resetProductsService()
  })

  it('entrega los 8 productos del JSON con sus campos', async () => {
    const products = await getProducts()

    expect(products).toHaveLength(8)
    expect(products[0]).toEqual({
      id: 1,
      name: 'Auriculares Bluetooth',
      price: 59.9,
      category: 'Audio',
      stock: 14,
    })
  })

  it('rechaza con NOT_FOUND cuando el producto no existe', async () => {
    await expect(getProduct(999)).rejects.toMatchObject({ code: 'NOT_FOUND' })
  })

  it('rechaza con NETWORK cuando se simula el error', async () => {
    setErrorSimulation(true)

    await expect(getProducts()).rejects.toBeInstanceOf(ProductsServiceError)
  })
})

// TODO(Parte 3): reemplace estos dos espacios por sus pruebas reales.
// Una prueba nueva debe vivir en este archivo o en otro dentro de __tests__/.
describe('validateProduct', () => {
  it.todo('TODO(Parte 3): rechaza un nombre vacio y un precio menor o igual que 0')
})

describe('toProductView', () => {
  it.todo('TODO(Parte 3): formatea precio y existencias, y marca el stock bajo')
})
