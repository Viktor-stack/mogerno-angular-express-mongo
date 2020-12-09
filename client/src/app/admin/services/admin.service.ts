import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Users } from './interface'
import { Observable } from 'rxjs'
import { ProfileUser, RoleName } from '../../main/shared/interface'
import { tap } from 'rxjs/operators'

interface Role {
  roleID?: string
}

@Injectable()
export class AdminService {
  roleID: Observable<Role>

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>('/api/admin/users')
  }

  getUserById(id: string): Observable<ProfileUser> {
    return this.http.get<ProfileUser>(`/api/admin/user/${id}`)
  }

  getRolesList(): Observable<RoleName[]> {
    return this.http.get<RoleName[]>('/api/admin/rolesList')
  }

  updateRole(userID: string, role: object): Observable<Role> {
    return this.http.patch<Role>(`/api/admin/user/${userID}/edit`, role)
      .pipe(
        tap(
          () => {
            localStorage.setItem('roleID', null)
          }
        )
      )
  }
}
