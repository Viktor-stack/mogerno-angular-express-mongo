import { Component, Input, OnInit } from '@angular/core'
import { ProfileUser, RoleName } from '../../shared/interface'

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  @Input('profile') profile: ProfileUser
  roleID: RoleName
  constructor() { }

  ngOnInit(): void {
  }

}
