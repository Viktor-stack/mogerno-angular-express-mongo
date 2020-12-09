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
    if (this.profileService.getRoleID() === '0d2a4b9e-38ab-4a32-b741-51fc68947035') {
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
