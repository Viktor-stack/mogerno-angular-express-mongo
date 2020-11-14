import { Component, OnInit } from '@angular/core'
import $ from 'jquery/dist/jquery.js'
@Component({
  selector: 'app-withdrawals-page',
  templateUrl: './withdrawals-page.component.html',
  styleUrls: ['./withdrawals-page.component.scss']
})
export class WithdrawalsPageComponent implements OnInit {
  title = 'Withdrawals'

  constructor() {
  }

  ngOnInit(): void {
    $('input[type=file], select').styler({
      locale: 'en'
    })
  }

}
