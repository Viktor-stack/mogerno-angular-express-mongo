import {Component, ElementRef, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {
  done: string

  @ViewChild('preloader') el: ElementRef
  @Output('el') edlin: ElementRef

  constructor() {
  }

  ngOnInit(): void {

  }

}
