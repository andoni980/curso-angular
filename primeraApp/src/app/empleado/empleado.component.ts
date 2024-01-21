import { Component } from '@angular/core';

@Component({
    selector: 'app-empleado',
    templateUrl: './empleado.component.html',
    styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {    
    nombre = "Iker";



    apellido = "Larrazabal";
    edad = 43;


    habilitacionCuadro = false;

    usuarioRegistrado = false;

    textoDeRegistro = "No hay nadie registrado"; 

    getRegistroUsuario(){
        this.usuarioRegistrado = false;
    }

    setUsuarioRegistrado(event:Event){
        // alert("El usuario se acaba de registrar");
        // this.textoDeRegistro = "El Usuario se acaba de registrar";

        // alert(event.target);

        if((<HTMLInputElement>event.target).value == "si"){
            this.textoDeRegistro = "El Usuario se acaba de registrar";
        }else{
            this.textoDeRegistro = "No hay ningun usuario registrado";
        }

    }
}
