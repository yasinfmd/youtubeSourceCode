import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {emailValidator, forbiddenName} from "./CustomValidator";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  defaultData:string="deneme2"
  myForm:any;


  constructor(private fb:FormBuilder) {
  }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      fname:this.fb.control(null,[Validators.required,Validators.minLength(3),forbiddenName('yasin')],emailValidator()),
      lname:this.fb.control(null,[Validators.required]),
      favorites:this.fb.control(this.defaultData),
      numbers:this.fb.array([])
    })
    this.myForm.valueChanges.subscribe((item:any)=>{
      console.log('değişti',item)
    })

    this.myForm.statusChanges.subscribe((item:any)=>{
      console.log('status',item)
    })


  }

  showData(){
/*    this.myForm.setValue({
      fname:"Ali",
      lname:"Veli",
      favorites:this.defaultData,
      numbers:[]
    })*/

    this.myForm.patchValue({
      fname:"Yasin"
    })
  }

  onSubmit(){
    console.log(this.myForm)
  }

  addNewNumber(){
    const ctrl=this.fb.control(null,[Validators.required])
    this.myForm.get('numbers').push(ctrl)
  }

}
