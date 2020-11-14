import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { MaterialInstance, MaterialService } from '../../../../main/shared/classes/material.service'

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('sidenav') sidenav: ElementRef
  SiteNav: MaterialInstance
  preloader = false

  constructor() {
  }

  ngOnInit(): void {

    this.loader(false)
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.SiteNav = MaterialService.initSidenav(this.sidenav)
    }, 1200)
  }


  ngAfterViewChecked(): void {
    setTimeout(() => {
      this.loader(true)
    }, 1100)
  }


  loader(value: boolean): boolean {
    return this.preloader = value
  }

  open(event: Event) {
    event.preventDefault()
    this.SiteNav.open()
  }
}
