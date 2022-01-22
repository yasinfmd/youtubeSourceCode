import {Component} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my_first_project';
  constructor(private router:Router) {
  }
  goToDeneme(){
    this.router.navigate(['/deneme'])
  }


}
