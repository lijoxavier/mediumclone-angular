import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, filter, map, scan, take, tap } from 'rxjs';
import { selectIsLoggedIn } from '../auth/store/reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private route: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      console.log("canActivate");

    return this.store.pipe(
      select(selectIsLoggedIn),
      map((isLoggedIn) => {
        console.log(isLoggedIn)

        if (!isLoggedIn) {
          this.route.navigateByUrl('/login')
          return false
        }
        else{
          this.route.navigateByUrl("/sas")
          return true
        }
      })
    )
  }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> {
  //   console.log('canActivate')
  //   return this.store.pipe(
  //     select(selectIsLoggedIn),
  //     filter((isLoggedIn) => isLoggedIn != null),
  //     tap((isLoggedIn: boolean) => {
  //       console.log('isLoggedIn', isLoggedIn)
  //       if (isLoggedIn === false) {
  //         this.route.navigateByUrl('/login')
  //       }
  //     })
  //   )
  // }
}
