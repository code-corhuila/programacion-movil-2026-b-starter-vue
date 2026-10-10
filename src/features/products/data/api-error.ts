// Error que lanza el cliente de la API (DADO).
// Distingue dos casos con "status":
//  - status === null  -> error de red: la peticion ni siquiera llego al servidor
//                        (servidor apagado, direccion incorrecta, CORS bloqueado).
//  - status = 400, 404, 500... -> el servidor respondio, pero con un error.
//                        "details" trae los mensajes de validacion del servidor.

export class ApiError extends Error {
  readonly status: number | null
  readonly details: string[]

  constructor(message: string, status: number | null, details: string[] = []) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.details = details
  }

  get isNetworkError(): boolean {
    return this.status === null
  }
}
