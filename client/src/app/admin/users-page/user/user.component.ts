import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core'
import {MaterialService} from '../../../main/shared/classes/material.service'
import {Users} from '../../services/interface'
import {AdminService} from '../../services/admin.service'
import {Observable} from 'rxjs'
import {ProfileUser} from '../../../main/shared/interface'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, AfterViewInit {
  @ViewChild('collapsibleRef') collapsibleRef: ElementRef
  users$: Observable<Users[]>
  user: ProfileUser


  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.users$ = this.adminService.getUsers()
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      MaterialService.initCollapsible(this.collapsibleRef)
    }, 1200)
  }


}
