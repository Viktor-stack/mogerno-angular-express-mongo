import {Component, OnInit} from '@angular/core';
import {LoaderService} from "../../shared/services/loader.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public load: LoaderService) {
    this.load.showLoader()
  }

  ngOnInit(): void {
    this.load.hideLoader()
  }

}
