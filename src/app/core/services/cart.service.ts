import { Injectable } from '@angular/core';
import { ProductoCarrito } from '../interfaces/carrito';
import { Producto } from '../interfaces/producto';
import { isNgTemplate } from '@angular/compiler';
import { NonNullableFormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { 
   const guardado= localStorage.getItem('carrito');
   if(guardado){
    this.carrito =JSON.parse(guardado);
    this.calcularTotal()
   }
  }

carrito: ProductoCarrito[]=[]
totalcarrito : number= 0
//carrito es de tipo array de productoCarrito, arranco como array vacio porque no hay nada en el carrito al principio  
agregarAlCarrito(producto : Producto , cantidad: number){
const index= this.carrito.findIndex(item=>item.producto.nombre=== producto.nombre)
if(index=== -1){
  const productoActual:ProductoCarrito= {
    cantidad: cantidad,
    producto: producto 
  }
  this.carrito.push(productoActual);
}
else{
  this.carrito[index].cantidad= this.carrito[index].cantidad+ cantidad;
}




console.log(this.carrito)
this.guardarLocalStorage()
this.calcularTotal()
}
eliminarProducto(nombre: string){
  this.carrito=this.carrito.filter(item=>item.producto.nombre !== nombre)
  this.guardarLocalStorage()
  this.calcularTotal
}
vaciarCarrito(){ 
  this.guardarLocalStorage()
  this.calcularTotal
  this.carrito = [];
}
cambiarCantidad(){
  this.guardarLocalStorage()
  this.calcularTotal
}
guardarLocalStorage(){
localStorage.setItem("carrito", JSON.stringify(this.carrito) )
}
calcularTotal(){
  this.totalcarrito = 0;
  this.carrito.forEach(item => {
    this.totalcarrito = this.totalcarrito + item.producto.precio * item.cantidad;
  })
}
}