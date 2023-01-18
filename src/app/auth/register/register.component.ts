import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent  {

    public formSubmitted = false;

    public registerForm = this.fb.group({
        nombre: ['', [  Validators.required, Validators.minLength(2) ] ],
        email: ['', [  Validators.required, Validators.email ] ],
        password: ['', [  Validators.required, Validators.minLength(2) ] ],
        password2: ['', [  Validators.required, Validators.minLength(2) ] ],
        terminos: [ true, [  Validators.required ] ],

    },{
        // Requiere retornar una función
        validators: this.passwordsIguales('password', 'password2')
    });

  constructor( private fb: FormBuilder ) { }

  crearUsuario() {
    this.formSubmitted = true;
    // console.log( this.registerForm.value )
  }


  campoNoValido( campo:string ) {

  }

  passwordsIguales( pass1Name: string, pass2Name: string ) {
    // Retorna una función, de esta manera tenemos acceso al formulario de manera global
    return ( formGroup: FormGroup ) => {
        const pass1Control = formGroup.get(pass1Name);
        const pass2Control = formGroup.get(pass2Name);

        if( pass1Control.value === pass2Control.value) {
            pass2Control.setErrors(null)
        } else {
            pass2Control.setErrors( { noEsIgual: true } )
        }
    }

  }

}
