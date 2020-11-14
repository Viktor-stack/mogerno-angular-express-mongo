import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { MaterialInstance, MaterialService } from '../shared/classes/material.service'
import $ from 'jquery/dist/jquery.js'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../shared/services/auth.service'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { ProfileUser } from '../shared/interface'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  modal: MaterialInstance
  modals: MaterialInstance
  lastScroll = 50
  @ViewChild('modal') modalRef: ElementRef
  @ViewChild('modals') modalsRef: ElementRef
  private window_height: any
  form: FormGroup
  submitted = false
  message: string
  user: ProfileUser


  constructor(public auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    })


    this.route.queryParams.subscribe((params: Params) => {
      if (params['loginAgain']) {
        MaterialService.totals('Для начала авторизуйтесь в системе')
      } else if (params['sessionFailed']) {
        this.modals.open()
      }
    })


    $(window).on('scroll load', function (event) {
      let st = $(this).scrollTop()
      if (st > this.lastScroll) {
        $('.header').addClass('hide-menu')
        if ($('.nav-search').hasClass('hide') === false) {
          $('.nav-search').toggleClass('hide')
        }
      } else if (st < this.lastScroll) {
        $('.header').removeClass('hide-menu')
      }
      if ($(window).scrollTop() <= 100) {
        $('.header')
          .removeClass('.header-fixed')
          .removeClass('hide-menu')
      } else if (
        $(window).scrollTop() < this.window_height &&
        $(window).scrollTop() > 0
      ) {
        $('.header').addClass('hide-menu')
      }
      this.lastScroll = st
    })
    $('.header__btn-menu').on('click', function () {
      $('.header__box').toggleClass('active')
    })
    $('.menu__btn').on('click', function () {
      $('.menu__list').slideToggle()
    })
    $('.menu__btn').on('click', function () {
      $('.menu__btn').toggleClass('active')
    })
  }

  ngAfterViewInit(): void {
    this.modal = MaterialService.initModal(this.modalRef, {
      endingTop: '25%',
      startingTop: '25%',
      preventScrolling: false,
      dismissible: false
    })
    this.modals = MaterialService.initModal(this.modalsRef, {
      dismissible: false
    })
  }


  openModal() {
    this.modal.open()
  }

  closeModal() {
    this.modal.close()
    this.form.reset()
  }

  submit() {
    if (this.form.invalid) {
      return
    }
    this.submitted = true
    this.auth.login(this.form.value).subscribe(
      () => this.router.navigate(['/profile', this.auth.getUserID()]),
      error => {
        MaterialService.totals(error.error.message)
        this.submitted = false
        this.form.enable()
      }
    )
    this.form.reset()
    this.modal.close()
    this.modals.close()
  }

  logout($event: Event) {
    $event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/'])
  }


}
