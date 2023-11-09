import { Component } from '@angular/core';
import { CartService } from '../core/services/cart.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public carritoService: CartService) {}

  crearMensaje():string{
  let parteProductos ='';
    this.carritoService.carrito.forEach(productocarrito=>{
      const mensajeProducto = `- ${productocarrito.producto.nombre} - ${productocarrito.cantidad}
      `;
      parteProductos=parteProductos + mensajeProducto;
    })

    const primeraparte = "https://wa.me/+5416521291?text="
    const segundaparte = `hola, quiero hacer un pedido:
  ${parteProductos}
  Mis datos: 
  - nombre: NOMBRE
  - direccion: DIRECCION
  Notas:
  `;
    const mensaje = encodeURI(primeraparte+segundaparte);
    return mensaje;
  }

  realizarPedido(){
    
      window.open(this.crearMensaje(), '-blank');
      this.carritoService.vaciarCarrito();
    }
  }
