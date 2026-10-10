// API REST de productos (Node.js + Express).
//
// Contrato (resumen; el detalle esta en el enunciado y se documenta en docs/api/):
//   GET    /api/products?search=&category=   200 + arreglo
//   GET    /api/products/:id                 200 + objeto  | 400 id no numerico | 404 no existe
//   POST   /api/products                     201 + objeto  | 400 validacion
//   PUT    /api/products/:id                 200 + objeto  | 400 | 404
//   DELETE /api/products/:id                 204 sin cuerpo | 400 | 404
// Formato de error de TODA la API: { "error": "mensaje", "details": ["..."] }
//
// Las partes marcadas "DADO" ya estan hechas: se usan y se explican (ADR-002 y la
// seccion "API error handling" del README). Las marcas TODO(Parte 2) se escriben.
import cors from 'cors'
import express from 'express'
import { readFileSync } from 'node:fs'

export const CATEGORIES = ['Bebidas', 'Snacks', 'Aseo', 'Hogar']
export const NAME_MAX_LENGTH = 60

// DADO: origen de la app Ionic en desarrollo (npm run dev). Se puede cambiar con la
// variable de entorno CORS_ORIGIN.
const APP_ORIGIN = process.env.CORS_ORIGIN ?? 'http://localhost:5173'

function loadSeed() {
  const file = new URL('./data/products.json', import.meta.url)
  return JSON.parse(readFileSync(file, 'utf-8'))
}

// DADO: responde con el formato de error uniforme de la API.
export function sendError(res, status, error, details = []) {
  res.status(status).json({ error, details })
}

// DADO: convierte el texto de la URL (req.params.id) en numero.
// Devuelve null si no es un entero positivo ("abc", "1.5", "-3" -> null).
export function parseId(rawId) {
  return /^\d+$/.test(rawId) ? Number(rawId) : null
}

// DADO: ultimo manejador de rutas. Si ninguna ruta atendio la peticion, llega aqui.
function notFoundHandler(req, res) {
  sendError(res, 404, 'Ruta no encontrada', [`${req.method} ${req.originalUrl}`])
}

// DADO: manejador central de errores. Express lo reconoce porque tiene 4 parametros.
// Atrapa los errores lanzados (throw) dentro de cualquier ruta o middleware.
function errorHandler(err, _req, res, next) {
  if (res.headersSent) return next(err)
  if (err.type === 'entity.parse.failed') {
    return sendError(res, 400, 'El cuerpo de la petición no es JSON válido')
  }
  console.error(err)
  sendError(res, 500, 'Error interno del servidor')
}

// TODO(Parte 2): validateProductInput(body)
//   Recibe req.body y devuelve { details, value }:
//   - details: arreglo de mensajes (uno por regla incumplida; vacio si todo es valido).
//   - value:   { name, price, category, stock } limpio (name sin espacios sobrantes).
//   Reglas: name texto no vacio (maximo NAME_MAX_LENGTH), price numero > 0,
//   category una de CATEGORIES, stock entero >= 0.

// "seed" permite que las pruebas arranquen la API con otros datos (opcional).
export function createApp({ seed } = {}) {
  const app = express()

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars -- se usa en las rutas de la Parte 2
  const products = seed ?? loadSeed() // almacenamiento en memoria: se reinicia con el servidor

  app.use(cors({ origin: APP_ORIGIN })) // DADO: permite que la app (otro origen) llame a la API
  app.use(express.json()) // DADO: llena req.body con el JSON de la peticion

  const router = express.Router()

  router.get('/', (req, res) => {
    // TODO(Parte 2): 200 + arreglo; filtrar por req.query.search (nombre que contenga
    // el texto, sin distinguir mayusculas) y por req.query.category (igual exacta).
    res.status(501).json({ error: 'Not implemented' })
  })

  router.get('/:id', (req, res) => {
    // TODO(Parte 2): parseId -> 400 si es null; buscar -> 404 si no existe; 200 + objeto.
    res.status(501).json({ error: 'Not implemented' })
  })

  router.post('/', (req, res) => {
    // TODO(Parte 2): validar req.body -> 400 con details; crear con id incremental -> 201 + objeto.
    res.status(501).json({ error: 'Not implemented' })
  })

  router.put('/:id', (req, res) => {
    // TODO(Parte 2): id (400) -> existencia (404) -> validar cuerpo (400) -> 200 + objeto actualizado.
    res.status(501).json({ error: 'Not implemented' })
  })

  router.delete('/:id', (req, res) => {
    // TODO(Parte 2): id (400) -> existencia (404) -> eliminar -> 204 sin cuerpo.
    res.status(501).json({ error: 'Not implemented' })
  })

  app.use('/api/products', router)

  // DADO: estos dos van SIEMPRE al final, despues de todas las rutas.
  app.use(notFoundHandler)
  app.use(errorHandler)

  return app
}
