import {Component, OnInit} from '@angular/core'
import {ProfileService} from '../../shared/services/profile.service'
import {ActivatedRoute, Params} from '@angular/router'
import {of} from 'rxjs'
import {switchMap} from 'rxjs/operators'
import {ProfileUser, RoleName} from '../../shared/interface'
import {LoaderService} from "../../shared/services/loader.service";
import $ from 'jquery/dist/jquery.js'

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  title = 'Profile Details'
  profile: ProfileUser
  roleID: RoleName
  url = 'assets/img/content/banner-here.jpg'

  constructor(private profileService: ProfileService,
              private route: ActivatedRoute,
              public load: LoaderService) {
    this.load.showLoader()
  }

  ngOnInit(): void {
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
      this.profile = res
      this.load.hideLoader()
    })

    setTimeout(() => {
      $('.profile-details__tabs .tab').on('click', function (event) {
        let id = $(this).attr('data-id')
        $('.about__me-inner')
          .find('.tab-item')
          .removeClass('active-tab')
          .hide()
        $('.profile-details__inner .tabs')
          .find('.tab')
          .removeClass('active')
        $(this).addClass('active')
        $('#' + id)
          .addClass('active-tab')
          .fadeIn()
        return false
      })
    }, 150)

    $('.reiteng-user').rateYo({
      rating: 5,
      starWidth: '12px',
      readOnly: false
    })
    $('.aside__btn').on('click', function () {
      $('.profile-details__aside, .aside__btn').toggleClass('active')
    })

  }

}
