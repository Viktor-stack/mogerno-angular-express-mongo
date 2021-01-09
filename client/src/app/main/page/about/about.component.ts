import {Component, OnInit} from '@angular/core'
import {LoaderService} from "../../shared/services/loader.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  outputs: ['title']
})
export class AboutComponent implements OnInit {
  title = 'About Us'

  constructor(public load: LoaderService) {
    this.load.showLoader()
  }

  ngOnInit(): void {
    this.load.hideLoader()
  }

}
