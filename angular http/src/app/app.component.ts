import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {retry,catchError} from "rxjs/operators"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'my_first_project';

  constructor(private http:HttpClient) {
  }


  ngOnInit(): void {
/*    this.http.post()
    this.http.patch()
    this.http.delete()
    this.http.put()*/
    this.http.get<Array<{userId:number,id:number,title:string,body:string}>>("http://jsonplaceholder.typicode.com/posts",
      {
        responseType:"json",
        observe:"body",
        withCredentials:true,
        params:{
          "name":"yasin",
          "lastname":"yasin2"
        },
        headers:{
          "Abc":"Yasin"
        }
      }
    ).pipe(
      retry(5),
      catchError(((err, caught) => {
        console.log("err",err)
        console.log(caught)
        throw err.message
      }))
    )
      .subscribe((x)=>{
      console.log("x",x)
    })
  }


}
