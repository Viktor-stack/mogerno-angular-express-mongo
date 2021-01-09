import {Component, OnInit} from '@angular/core';
import {LoaderService} from "../../shared/services/loader.service";

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {
  title = 'Contact'

  constructor(public load: LoaderService) {
    this.load.showLoader()
  }

  ngOnInit(): void {
    this.load.hideLoader()
  }

}
