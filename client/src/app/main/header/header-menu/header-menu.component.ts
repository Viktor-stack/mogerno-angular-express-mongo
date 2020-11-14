import { Component, OnInit } from '@angular/core'
import $ from 'jquery/dist/jquery.js'

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    if (window.innerWidth === 900) {
      $('.menu_items').on('click', function () {
        $('.menu__list').slideToggle()
      })
      $('.menu_items').on('click', function () {
        $('.menu__btn').toggleClass('active')
      })
    } else if (window.innerWidth === 500) {
      $('.menu_items').on('click', function () {
        $('.menu__list').slideToggle()
      })
      $('.menu_items').on('click', function () {
        $('.menu__btn').toggleClass('active')
      })
    }

  }


}
