import { Component, OnInit } from '@angular/core';
import mixitup from 'mixitup/dist/mixitup.min'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    mixitup(".propducts__inner-box")
  }

}
