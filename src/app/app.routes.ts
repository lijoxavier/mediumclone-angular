import { Route } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";

export const appRoutes: Route[] = [
  {
    path: 'register',
    loadChildren: () => import('src/app/auth/auth.routes').then((m) => m.registerRoutes),
    // canActivate:[AuthGuard]
  },
  {
    path:"login",
    loadChildren:()=>import("src/app/auth/auth.routes").then((m)=>m.loginRoutes),

  },
  {
    path:"",
    loadChildren:()=>import("src/app/globalFeed/globalFeed.routes").then((m)=>m.routes)
  }
]