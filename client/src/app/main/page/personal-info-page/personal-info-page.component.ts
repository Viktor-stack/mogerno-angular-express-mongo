import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {NgModel} from "@angular/forms";
import {PersonalInfoService} from "../../shared/services/personal-info.service";
import {Country, ProfileUser} from "../../shared/interface";
import {MaterialService} from "../../shared/classes/material.service";
import {ProfileService} from "../../shared/services/profile.service";
import {of} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {LoaderService} from "../../shared/services/loader.service";
import $ from 'jquery/dist/jquery.js'

@Component({
  selector: 'app-personal-info-page',
  templateUrl: './personal-info-page.component.html',
  styleUrls: ['./personal-info-page.component.scss']
})
export class PersonalInfoPageComponent implements OnInit {
  title = 'Settings'
  @ViewChild('select') selectRef: ElementRef
  @ViewChild('countryModel') countryModel: NgModel
  ngModel: string;
  country: Country[]
  userDetails: ProfileUser

  constructor(private personalInfoService: PersonalInfoService,
              private profileService: ProfileService,
              private route: ActivatedRoute,
              public load: LoaderService) {
    this.load.showLoader()
  }

  ngOnInit(): void {
    $(".settings__wrapper .tab").on("click", function (event) {
      const id = $(this).attr("data-id");
      $(".settings__wrapper")
        .find(".tab-item")
        .removeClass("active-tab")
        .hide();
      $(".settings__wrapper .tabs")
        .find(".tab")
        .removeClass("active");
      $(this).addClass("active");
      $("#" + id)
        .addClass("active-tab")
        .fadeIn();
      return false;
    });
    this.personalInfoService.getAllCountry().subscribe((con) => {
      this.country = con
    })
    setTimeout(() => {
      MaterialService.initSelect(this.selectRef)
    }, 1000)
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
      ).subscribe((user) => {
      this.userDetails = user
      this.load.hideLoader()
    })
  }
}
