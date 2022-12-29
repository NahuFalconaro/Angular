import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';
//formBuilder ayuda a crear form facilmente

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {


  forma!: FormGroup;


  constructor(private fb: FormBuilder, private _validadoresService: ValidadoresService) {
    this.crearFormulario();
    this.cargarDataAlFormulario();

    this.crearListeners();
  }

  ngOnInit(): void {
  }

  get nombreNoValido(){
    return this.forma.get('name')?.invalid && this.forma.get('name')?.touched
  }

  get lastNameNoValido(){
    return this.forma.get('lastname')?.invalid && this.forma.get('lastname')?.touched
  }

  get emailNoValido(){
    return this.forma.get('email')?.invalid && this.forma.get('email')?.touched
  }

  get distritoNoValido(){
    return this.forma.get('direccion.distrito')?.invalid && this.forma.get('direccion.distrito')?.touched
  }//o hacer get direccion y despues distrito a ese.

  get pasatiempos(){
    return this.forma.get('pasatiempos') as FormArray;
  }

  get pass1noValido(){
    return this.forma.get('password1')?.invalid && this.forma.get('password1')?.touched
    //controlar largo, y demas cosas aca
  }
  get pass2noValido(){
    const pass1 = this.forma.get('password1');
    const pass2 = this.forma.get('password2');

    return (pass1 === pass2)? true : false;
    //return this.forma.get('password2')?.invalid && this.forma.get('password2')?.touched
    //controlar largo, y demas cosas aca
  }

  get userNoValido(){

    return true;
  }
  guardar(){
    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach(c => {

        if(c instanceof FormGroup){
          Object.values(c.controls).forEach(c => {c.markAsTouched()})//se hace otra iteracion por que
          //direccion es un formGroup dentro de otro form group, por lo que tiene que recorrer sus hijos
        }

        c.markAsTouched();
      })
       
    }
    this.forma.reset();//borra el estado del formulario y lo vuelve a vacio
  }

  crearFormulario() {
    this.forma = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)],],
      lastname: ['', [Validators.required,this._validadoresService.noFalconaro]],//se manda la referencia de la funcion
        //si le pongo noFalconaro() la funcion se ejecuta
      email: ['', [Validators.required, Validators.email],],
      usuario:['', ,this._validadoresService.existeUsuario ],//si no se necesita validador sinccrono, que es el segundo campo, se deja vacio
      password:['', [Validators.required]],
      password2:['', [Validators.required]],
      direccion:this.fb.group({
        distrito:['', Validators.required],
        ciudad: ['', Validators.required]
      }),
      pasatiempos: this.fb.array([]) //asi se define un arreglo en un formulario
    },{
      validators: [this._validadoresService.passEquals('password', 'password2')]//le paso el nombre del campo del form
    }); //validacion personalizada contra un formulario entero, en lastname es una personalziada contra un solo campo



    //arreglo [valor de inicio en el input, validaciones sincronicas, validaciones asincronicas]
    //validacion sincrona: ejemplo: required de html
    //validadores asincronos
  }

  crearListeners(){
    this.forma.valueChanges.subscribe(valor => {//value changes se dispara cuando cualquier input del formulario cambie
      console.log(valor);
    })

    this.forma.statusChanges.subscribe(status => //imprime el estado del formulario
      console.log(status)
    )

    this.forma.get('name')?.valueChanges.subscribe(val => console.log(val)//voy obteniendo los cambios de este inbput en especifico
    )
  }

  cargarDataAlFormulario() {//carga la data inicial al formulario
    // this.forma.setValue({
    //   name: 'Nahuel',
    //   lastname: 'Falconaro',
    //   email: 'nfalconaro5@gmail.com',
    //   direccion:{
    //     distrito:'Tandil',
    //     ciudad: 'Tandil'
    //   }
    // })
    //en vez de set value, se puede usar el reset, que lo que hace permite cargar algunos campos, el setValue, obliga a 
    //cargar todos los campos si o si del formulario
    this.forma.reset({
      name: 'Vacio',
      lastname: 'Falconaro desde reset',
      email: ' '
    });
    //es decir, es como un truco y hacen lo mismo


    //manera de cargar data al formulario
    ['data1','data2'].forEach(e => {
      this.pasatiempos.push(this.fb.control(e,[Validators.required]))
    });
  }

  addPasatiempo(){
    this.pasatiempos.push(this.fb.control('', [Validators.required]))
  }

  deletePasatiempo(index:number){
    this.pasatiempos.removeAt(index);
  }
}
