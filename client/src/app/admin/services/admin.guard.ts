import { Injectable } from '@angular/core'
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { Observable, of } from 'rxjs'
import { ProfileService } from '../../main/shared/services/profile.service'

@Injectable()
export class AdminGuard implements CanActivate, CanActivateChild {

  constructor(private profileService: ProfileService,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.profileService.getRoleID() === '5f8cef797b7a0a3f40aa3e5e') {
      return of(true)
    } else {
      this.router.navigate(['/404'], {
        queryParams: {
          superAdmin: true
        }
      })
      return of(false)
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state)
  }

}
