import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id:any=""

  query:any=""
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    //  this.id=this.route.snapshot.paramMap.get("id")

  //  this.id=this.route.snapshot.params['id']

  //  this.query=this.route.snapshot.queryParamMap.get("ad")
    //this.route.snapshot.paramMap.has("id")
    //this.route.snapshot.queryParamMap.has("ad")

    this.route.fragment.subscribe((x)=> {
      console.log("x",x)
    })
    console.log( this.route.snapshot.paramMap.has("id"),this.route.snapshot.queryParamMap.has("ad"))
    this.route.queryParams.subscribe((x)=>{
      console.log("x",x)
    })
    this.route.params.subscribe((x)=>{
      this.id=x['id']
    })
  }

}
