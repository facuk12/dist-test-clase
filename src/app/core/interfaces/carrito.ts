import { Producto } from "./producto"

export interface ProductoCarrito  {
    cantidad: number
    producto: Producto
}
//productocarrito es un array de tipo producto, la interface sirve para saber que valores podemos agregarle al carrito