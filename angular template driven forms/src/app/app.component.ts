import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') customForm:NgForm|undefined

  defaultData:string="deneme2"
  onSubmit(){
    console.log("Gönderdimm")
    console.log(this.customForm)
  }


  suggestMockData(){
   /* this.customForm?.setValue({
      fname:"Yasin",
      lname:"Dalkılıç",
      favorites:this.defaultData
    })*/

    this.customForm?.form.patchValue({
        userData:{
          fname:"Yasin",
          lname:"Dalkılıç",
        }
    })
  }
}
