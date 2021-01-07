import {Injectable} from '@angular/core';
import {ILoader} from "../interface";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loader: ILoader = {isLoading: false}

  constructor() {
  }

  showLoader() {
    this.loader.isLoading = true
  }

  hideLoader() {
    setTimeout(function () {
      const preloader = document.getElementById("preloader");
      if (!preloader.classList.contains("done")) {
        preloader.classList.add("done");
      }
    }, 1000);
    setTimeout(() => {
      this.loader.isLoading = false;
    }, 1500)
  }
}
