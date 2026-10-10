import { afterEach, describe, expect, it, vi } from 'vitest'
import { ApiError } from '../data/api-error'
import { getProducts } from '../data/products-api'

// PRUEBA DE EJEMPLO (dada) del cliente HTTP: se reemplaza fetch por una version falsa,
// asi la prueba no necesita que la API este encendida.
describe('getProducts (ejemplo dado)', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('entrega la lista cuando la API responde 200', async () => {
    const body = [{ id: 1, name: 'Agua', price: 2500, category: 'Bebidas', stock: 10 }]
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(JSON.stringify(body), { status: 200 })))

    await expect(getProducts()).resolves.toEqual(body)
  })

  it('lanza ApiError de red (status null) cuando fetch falla', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('Failed to fetch')))

    const error = await getProducts().catch((e) => e)
    expect(error).toBeInstanceOf(ApiError)
    expect(error.isNetworkError).toBe(true)
  })

  it('lanza ApiError con el status y el mensaje del servidor en una respuesta no exitosa', async () => {
    const body = { error: 'Error interno del servidor', details: [] }
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(JSON.stringify(body), { status: 500 })))

    const error = await getProducts().catch((e) => e)
    expect(error).toBeInstanceOf(ApiError)
    expect(error.status).toBe(500)
    expect(error.message).toBe('Error interno del servidor')
  })
})
