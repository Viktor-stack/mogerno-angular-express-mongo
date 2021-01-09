import {Component, Input, OnDestroy, OnInit} from '@angular/core'
import {ProfileUser, RoleName} from '../../shared/interface'
import {ProfileService} from "../../shared/services/profile.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {LoaderService} from "../../shared/services/loader.service";


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
  isLoading = true;


  constructor(private profileService: ProfileService,
              private route: ActivatedRoute,
              public load: LoaderService) {
    this.load.showLoader()
  }

  ngOnInit(): void {
    this.aSub = setInterval(() => {
      this.route.params
        .pipe(
          switchMap(
            (params: Params) => {
              if (params['id']) {
                return this.profileService.getCheckToken(params['id'])
              }
              return of(null)
            }
          )
        ).subscribe(res => {
        this.profile = res
      })
    }, 2000)
    setTimeout(() => {
      if (this.profile == undefined) {
        return
      } else {
        setTimeout(() => {
          const preloader = document.getElementById("loader");
          if (!preloader.classList.contains("done")) {
            preloader.classList.add("done");
          }
          setTimeout(() => {
            this.isLoading = false
          }, 1000);
        }, 500)
      }
    }, 2000)
  }

  ngOnDestroy(): void {
    clearInterval(this.aSub)
  }

}
