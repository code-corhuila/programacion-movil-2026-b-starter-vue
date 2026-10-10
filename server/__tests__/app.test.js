// @vitest-environment node
// La linea anterior hace que esta prueba corra en Node (no en jsdom): la API usa
// modulos de Node y se llama con el fetch real de Node.
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { startTestServer } from './start-test-server.js'

let testServer

beforeAll(async () => {
  testServer = await startTestServer()
})

afterAll(async () => {
  await testServer.close()
})

// PRUEBA DE API DE EJEMPLO (dada): createApp() arranca y una ruta desconocida responde
// 404 con el formato de error uniforme { error, details }.
describe('API de productos (ejemplo dado)', () => {
  it('responde 404 con el formato de error en una ruta desconocida', async () => {
    const response = await fetch(`${testServer.baseUrl}/api/no-existe`)

    expect(response.status).toBe(404)
    expect(await response.json()).toEqual({
      error: 'Ruta no encontrada',
      details: ['GET /api/no-existe'],
    })
  })
})

// TODO(Parte 5): escriba sus pruebas de API reales (al menos dos), con startTestServer().
// Por ejemplo: POST con datos invalidos -> 400 con details; GET de un id inexistente -> 404.
describe('endpoints de productos', () => {
  it.todo('TODO(Parte 5): POST invalido responde 400 con { error, details }')
  it.todo('TODO(Parte 5): GET de un id que no existe responde 404')
})
