import {Component, OnInit} from '@angular/core'
import {AuthService} from '../../shared/services/auth.service'
import {ProfileService} from '../../shared/services/profile.service'
import {Observable} from 'rxjs'
import {ProfileUser} from '../../shared/interface'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],

})
export class UserComponent implements OnInit {
  userProfile$: Observable<ProfileUser>
  image: string
  isLoading = true

  constructor(public auth: AuthService,
              public profile: ProfileService) {
  }

  ngOnInit(): void {
    if (this.userProfile$ == undefined) {
      this.userProfile$ = this.profile.getProfile(this.auth.getUserID())
    }
    setTimeout(() => {
      if (this.userProfile$ == undefined) {
        return
      } else {
        setTimeout(() => {
          const preloader = document.getElementById("loader__user");
          if (!preloader.classList.contains("done")) {
            preloader.classList.add("done");
          }
          setTimeout(() => {
            this.isLoading = false
          }, 1500);
        }, 500)
      }
    }, 2000)
  }

}
