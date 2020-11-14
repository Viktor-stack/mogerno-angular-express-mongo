import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core'
import { MaterialInstance, MaterialService } from '../../shared/classes/material.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {

  @ViewChild('modal') modalRef: ElementRef
  modal: MaterialInstance

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.modal = MaterialService.initModal(this.modalRef)
  }



}
