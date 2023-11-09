import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIA } from 'src/app/core/constants/categoria';
import { Categoria } from 'src/app/core/interfaces/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage  {

  categoria:Categoria | undefined;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { 
    activatedRoute.params.subscribe(params =>{
       this.categoria= CATEGORIA.find(categoria=>(categoria.nombre === params['nombre']))
    })
   }

  
   
   
  
}