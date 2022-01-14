import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'my-first-project';

  constructor(private router:Router) {
  }

  goUsers(){
    this.router.navigate(['/users'],{fragment:"abc"})
  }

  ngOnInit(): void {

  }
}
