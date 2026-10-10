// Ayudante de pruebas (DADO): levanta la API en un puerto libre y la apaga al terminar.
//
// Uso en una prueba de la API:
//   const { baseUrl, close } = await startTestServer()
//   const response = await fetch(`${baseUrl}/api/products`)
//   await close()
//
// "listen(0)" le pide al sistema operativo un puerto libre, asi las pruebas no
// chocan con el servidor de desarrollo (puerto 3000). Cada llamada crea una API
// nueva con los datos semilla, de modo que una prueba no afecta a las otras.
import { once } from 'node:events'
import { createApp } from '../app.js'

export async function startTestServer(options) {
  const server = createApp(options).listen(0)
  await once(server, 'listening')
  const { port } = server.address()

  return {
    baseUrl: `http://127.0.0.1:${port}`,
    close: () =>
      new Promise((resolve) => {
        server.close(() => resolve())
        server.closeAllConnections()
      }),
  }
}
