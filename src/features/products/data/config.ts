// Configuracion del cliente (DADO).
// La direccion de la API sale de la variable de entorno VITE_API_URL (archivo .env,
// copiado de .env.example). Si no existe, se usa la API local en el puerto 3000.
// Vite solo expone al navegador las variables que empiezan con VITE_.

const DEFAULT_API_URL = 'http://localhost:3000'

export const API_URL: string = (import.meta.env.VITE_API_URL ?? DEFAULT_API_URL).replace(/\/$/, '')
