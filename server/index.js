// Punto de arranque de la API (DADO). Ejecutar con: npm run server
import { createApp } from './app.js'

const PORT = Number(process.env.PORT) || 3000

createApp().listen(PORT, () => {
  console.log(`API de productos escuchando en http://localhost:${PORT}/api/products`)
})
