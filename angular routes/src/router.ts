import {Routes} from "@angular/router";
import {HomeComponent} from "./app/home/home.component";
import {UserComponent} from "./app/user/user.component";
import {UserdetailComponent} from "./app/userdetail/userdetail.component";
import {AuthGuard} from "./auth-guard.service";


const router: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
    data: {
      name: "DENEMEEEe"
    }
  },
  {
    path: "users",
    component: UserComponent,
   // canActivateChild:[AuthGuard],
    canActivate:[AuthGuard],
    children: [
      {
        path: ":id",
        component: UserComponent,

      },
      {path: "user-detail", component: UserdetailComponent}
    ]
  },

  {path: "**", redirectTo: "/users",}
]
export default router
