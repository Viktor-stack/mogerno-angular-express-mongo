import {Component, OnInit} from '@angular/core';
import {LoaderService} from "../../shared/services/loader.service";
import 'node_modules/ion-rangeslider/js/ion.rangeSlider.js'
import $ from 'jquery/dist/jquery.js'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  title = 'Product Page';

  constructor(public load: LoaderService) {
    this.load.showLoader()
  }

  ngOnInit(): void {
    $(".range__price-limit").ionRangeSlider({
      type: "double",
      min: 0,
      max: 1000,
      from: 0,
      to: 600,
      prefix: "$"
    });
    $(".icon-th-list").on("click", function () {
      $(".addclass").addClass("list");
      $(".icon-th-list").addClass("active");
      $(".icon-th-large").removeClass("active");
    });

    $(".icon-th-large").on("click", function () {
      $(".addclass").removeClass("list");
      $(".icon-th-large").addClass("active");
      $(".icon-th-list").removeClass("active");
    });
    this.load.hideLoader()
  }

}
