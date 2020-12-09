import {Component, OnInit} from '@angular/core'
import {AuthService} from './main/shared/services/auth.service'
import {ProfileService} from './main/shared/services/profile.service'
import {ActivatedRoute, Params, Router} from '@angular/router'
import {MaterialService} from './main/shared/classes/material.service'

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  constructor(private auth: AuthService,
              private profile: ProfileService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params: Params) => {
      if (params['superAdmin']) {
        MaterialService.totals('У вас нет прав Доступа к этой Странице!')
      } else if (params['sessionFailed']) {
        const potentialToken = localStorage.getItem('auth-token')
        if (potentialToken !== null) {
          this.route.queryParams.subscribe((params: Params) => {
            if (params['sessionFailed']) {
              this.router.navigate(['/#'], {
                queryParams: {
                  sessionFailed: true
                }
              })
            }
          })
          localStorage.clear()

        }
      }
    })
    const potentialToken = localStorage.getItem('auth-token')
    if (potentialToken !== null) {
      this.auth.setToken(potentialToken)
    }

    const potentialRoleID = localStorage.getItem('roleID')
    if (potentialRoleID !== null) {
      this.profile.setRoleID(potentialRoleID)
    }

    const userID = localStorage.getItem('userID')
    if (userID !== null) {
      this.auth.setUserID(userID)
    }
  }
}
