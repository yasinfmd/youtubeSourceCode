import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree,Router} from "@angular/router";

import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

const test=():Promise<boolean>=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(false)
    },2000)
  })
}

@Injectable()
export class  AuthGuard implements CanActivate,CanActivateChild{
  constructor(private router:Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return test().then((res:boolean)=>{
      if(res){
        return res
      }else{
        console.log(route,state)
        this.router.navigate(['/'])
        return  false
      }
    })
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return test().then((res:boolean)=>{
      if(res){
        return res
      }else{
        console.log(childRoute,state)
        this.router.navigate(['/'])
        return  false
      }
    })
  }

}
