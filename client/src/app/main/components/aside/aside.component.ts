import {Component, Input, OnDestroy, OnInit} from '@angular/core'
import {ProfileUser, RoleName} from '../../shared/interface'
import {ProfileService} from "../../shared/services/profile.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {of, Subscription} from "rxjs";


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit, OnDestroy {
  @Input('profile') profile: ProfileUser
  roleID: RoleName
  image: string
  private aSub


  constructor(private profileService: ProfileService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.aSub = setInterval(() => {
      this.route.params
        .pipe(
          switchMap(
            (params: Params) => {
              if (params['id']) {
                return this.profileService.getProfile(params['id'])
              }
              return of(null)
            }
          )
        ).subscribe(res => {
        return this.profile = res
      })
    }, 2000)


    // let str = this.profile.avatarName.split('\\')
    // this.image

  }

  ngOnDestroy(): void {
    clearInterval(this.aSub)
  }

}
