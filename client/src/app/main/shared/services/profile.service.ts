import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ProfileUser } from '../interface'
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private roleID: string

  constructor(private http: HttpClient) {
  }

  getProfile(id: string): Observable<ProfileUser> {
    return this.http.get<ProfileUser>(`/api/profile/${id}`)
      .pipe(
        tap(
          ({roleID}) => {
            localStorage.setItem('roleID', roleID._id)
            return this.setRoleID(roleID._id)
          }
        )
      )

  }

  getRoleID(): string {
    return this.roleID
  }

  setRoleID(roleID: string): string {
    return this.roleID = roleID
  }
}
