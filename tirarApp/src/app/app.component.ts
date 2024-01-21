import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registro de Usuarios ';
  mensaje= "awsdrfasef";
  registrado=false;
  nombre:string = "";
  apellido:string= "";
  entradas: Array<{titulo:string}>;

  constructor(){
    this.entradas = [
        {titulo:"Python, cada dia más presente"},
        {titulo:"Java presente desde hace más de 20 años"},
        {titulo:"Javascript cada vez más funcional"},
        {titulo:"Kotlin potencia para tus apps"},
        {titulo:"Donde quedó Pascal"}
    ]
  }
  
  registrarUsuario(){

    this.registrado = true;

      this.mensaje = "Usuario registrado con éxito con el nombre de ";
    }
}
