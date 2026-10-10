import { describe, expect, it } from 'vitest'
import { formatCOP } from '../domain/product'

// PRUEBA UNITARIA DE EJEMPLO (dada): sirve para que `npm test` corra desde el inicio y
// para ver como se escribe una prueba de una funcion pura del dominio.
describe('formatCOP (ejemplo dado)', () => {
  it('usa punto de miles y el simbolo de pesos', () => {
    expect(formatCOP(1250000)).toBe('$ 1.250.000')
    expect(formatCOP(2500)).toBe('$ 2.500')
  })

  it('no agrega separador a valores menores de mil y redondea los decimales', () => {
    expect(formatCOP(900)).toBe('$ 900')
    expect(formatCOP(1999.6)).toBe('$ 2.000')
  })
})

// TODO(Parte 5): escriba sus pruebas unitarias reales (al menos dos) en este archivo o en
// otro dentro de __tests__/. Reemplace estos espacios.
describe('validateProduct', () => {
  it.todo('TODO(Parte 5): acepta un borrador valido y rechaza nombre vacio, precio <= 0, categoria invalida y stock negativo o decimal')
})

describe('toProductView', () => {
  it.todo('TODO(Parte 5): formatea el precio y calcula la etiqueta de stock (Agotado, Pocas unidades, Disponible)')
})

describe('filterProducts', () => {
  it.todo('TODO(Parte 5): filtra por texto sin distinguir mayusculas y por categoria exacta')
})
