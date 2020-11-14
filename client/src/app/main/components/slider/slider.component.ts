import { Component, OnInit } from '@angular/core'
import $ from 'jquery/dist/jquery.js'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    $('.product-slider__inner').slick({
      arrows: false,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 4,
    })
  }

}
