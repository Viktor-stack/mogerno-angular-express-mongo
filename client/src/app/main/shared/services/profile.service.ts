import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import {ProfileUser, Token} from '../interface'
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private roleID: string

  constructor(private http: HttpClient) {
  }

  getCheckToken(id: string): Observable<Token> {
    return this.http.get<Token>(`/api/profile/${id}/token`)
  }

  getProfile(id: string): Observable<ProfileUser> {
    return  this.http.get<ProfileUser>(`/api/profile/${id}`)
      .pipe(
        tap(
          ({roleID}) => {
            localStorage.setItem('roleID',roleID._id)
            return this.setRoleID(roleID._id)
          }
        )
      )

  }

  getPhoto(avatarName: string) {
    debugger
    return this.http.get(`/api/profile/avatar/${avatarName}`)
  }


  getRoleID(): string {
    return this.roleID
  }

  setRoleID(roleID: string): string {
    return this.roleID = roleID
  }
}
