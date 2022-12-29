import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';


interface ErrorValidate{
  [s:string]: boolean
}


@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noFalconaro(control:FormControl):{[s:string]: boolean} | null{
    if(control.value?.toLowerCase() === 'falconaro'){
      return{
        noFalconaro:true
      }
    }
    return null;
  }

  existeUsuario(control:FormControl):Promise<ErrorValidate> | Observable<ErrorValidate>{

    if (!control.value) {
      return Promise.resolve({error: false});
    }

    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        
        if (control.value === 'zahu') {
          resolve({existe: true})
        }else{
          resolve({error: false});
        }
      }, 3500);
    })
  }
  passEquals(pass1:string, pass2:string){
    
    return (formGroup:FormGroup) =>{
      console.log(pass1, pass2, 'por parametros');
      const p1c = formGroup.controls[pass1];
      const p2c = formGroup.controls[pass2];
      console.log(p1c,'<- p1c, p2c ->', p2c, 'por formGRoup');
      if(p1c.value === p2c.value){
        p2c.setErrors(null);
      }else{
        p2c.setErrors({
          notEqual: true
        })
      }
    }
  }


}
