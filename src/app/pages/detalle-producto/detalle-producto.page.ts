import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIA } from 'src/app/core/constants/categoria';
import { Producto } from 'src/app/core/interfaces/producto';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage{

  constructor(private activatedRoute: ActivatedRoute , public carritoService: CartService ) {
  activatedRoute.params.subscribe( params =>{
    this.buscarproducto(params ['nombre'])
  })  }
  cantidad=1;
buscarproducto(nombreproductoabuscar:string){
  CATEGORIA 

  for (let i = 0; i < CATEGORIA.length; i++) {
    const categoriaActual= CATEGORIA[i];

    for (let j = 0; j < categoriaActual.productos.length; j++) {
      const productoActual= categoriaActual.productos[j];
      if(productoActual.nombre === nombreproductoabuscar ){
        this.producto=productoActual
      }
 
    }
    
  }
}

  producto: Producto = {
    imagen: '',
    nombre: 'HOLA',
    descripcion: 'CHAU',
    precio: 5000
  }
}
