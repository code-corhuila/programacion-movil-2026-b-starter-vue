// Parte 4 - Ejercicio de Kotlin (solo lo visto en la semana 7).
// Se puede probar en https://play.kotlinlang.org o con el compilador (kotlinc).
//
// Se pide:
//  1. La clase Product: id, name y category de solo lectura (val); price y stock que
//     pueden cambiar (var); y un campo opcional (nullable), por ejemplo
//     "description: String?".
//  2. stockLabel(stock: Int?): String
//       null          -> "Sin dato"
//       0             -> "Agotado"
//       menos de 5    -> "Pocas unidades"
//       5 o mas       -> "Disponible"
//     Maneje el null con el operador Elvis (?:) o con un if.
//  3. applyDiscount(price: Double, percent: Int): Double
//     Devuelve el precio con el descuento aplicado (applyDiscount(10000.0, 20) -> 8000.0).
//  4. main(): se crean 3 productos y, por cada uno, se imprimen su nombre, la etiqueta de stock
//     y el precio con 10 % de descuento.

// TODO(Parte 4): defina la clase Product.
class Product

// TODO(Parte 4): implemente stockLabel.
fun stockLabel(stock: Int?): String {
    return ""
}

// TODO(Parte 4): implemente applyDiscount.
fun applyDiscount(price: Double, percent: Int): Double {
    return price
}

// TODO(Parte 4): cree 3 productos y muestrelos con println.
fun main() {
    println("TODO(Parte 4)")
}
