import {Component, OnInit} from '@angular/core'
import {AuthService} from '../../shared/services/auth.service'
import {ProfileService} from '../../shared/services/profile.service'
import {Observable} from 'rxjs'
import {ProfileUser} from '../../shared/interface'
import {ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userProfile$: Observable<ProfileUser>
  image: string

  constructor(public auth: AuthService,
              public profile: ProfileService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.profile.getProfile(this.auth.getUserID()).subscribe(() => {
      this.route.queryParams.subscribe((params: Params) => {
      })
    })
    this.userProfile$ = this.profile.getProfile(this.auth.getUserID())

    // this.profile.getProfile(this.auth.getUserID()).subscribe(res => {
    //   this.image = res.avatarName
    //   let str = this.image.split('\\')
    //   this.image = str.join('/')
    // })
  }

}
