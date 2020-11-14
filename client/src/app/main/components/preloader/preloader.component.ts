import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(function() {
    const preloader = document.getElementById("preloader");
    if (!preloader.classList.contains("done")) {
      preloader.classList.add("done");
    }
  }, 1000);
  }

}
