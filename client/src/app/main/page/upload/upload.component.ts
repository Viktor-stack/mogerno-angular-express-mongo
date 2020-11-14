import { Component, OnInit } from '@angular/core'
import $ from 'jquery/dist/jquery.js'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  title = 'Upload Product'

  constructor() {
  }

  ngOnInit(): void {
    $('input[type=file], select').styler({
      locale: 'en'
    })
  }

}
