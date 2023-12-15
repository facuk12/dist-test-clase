import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

    constructor(private router: Router) {}
  
    login(email: string, password: string) {
      // Verifica que se haya ingresado al menos una letra en cada campo
      if (email.trim().length > 0 && password.trim().length > 0) {
        // Redirige a la página principal después de iniciar sesión
        this.router.navigate(['/tabs/tab2']);
      } else {
        // Muestra un mensaje de error o realiza alguna acción en caso de campos vacíos
        console.log('Por favor, completa todos los campos.');
      }
    }
}
