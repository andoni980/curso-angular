import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  empleados:Empleado[] =[
    new Empleado("Andoni", "Larrazabal", "Presidente", 7000),
    new Empleado("Iker", "Larrazabal", "Vicepresidente", 5000),
    new Empleado("Rebeca", "Vicente", "Directora", 5000),
    new Empleado("Laura", "Goméz", "HaceDeTodo", 5000)
  ];

  agregarEmpleado(){
    let empleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.empleados.push(empleado);
  }

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;
}
