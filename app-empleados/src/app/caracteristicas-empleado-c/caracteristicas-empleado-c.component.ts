import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrl: './caracteristicas-empleado-c.component.css'
})
export class CaracteristicasEmpleadoCComponent {

    @Output() caracteristicasEmpleados = new EventEmitter<string>();

    agregarCaracteristica(value: string){
        this.caracteristicasEmpleados.emit(value);
    }
}
