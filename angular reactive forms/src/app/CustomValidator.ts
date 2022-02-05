import {AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn} from "@angular/forms";

export function forbiddenName(name:string):ValidatorFn{
  return  (control:AbstractControl):ValidationErrors|null=>{
    if(name===control.value){
      return  {nameForbidden:true}
    }
    return  null
  }
}


export function emailValidator():AsyncValidatorFn{
  return  (control:AbstractControl):Promise<ValidationErrors | null>=>{
    return  new Promise((resolve => {
      setTimeout(()=>{
        resolve({'emailExist':true})
      },1500)
    }))
  }
}
