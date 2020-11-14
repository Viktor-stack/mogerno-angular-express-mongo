import { Component, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  outputs: ['title']
})
export class AboutComponent implements OnInit {
  title = 'About Us'

  constructor() {
  }

  ngOnInit(): void {
  }

}
