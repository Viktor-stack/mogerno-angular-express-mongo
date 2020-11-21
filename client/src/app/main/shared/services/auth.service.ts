import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {User} from '../interface'
import {tap} from 'rxjs/operators'

interface Token {
  token: string
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = null
  private userID: string

  constructor(private http: HttpClient) {
  }


  login(user: User): Observable<{ token: string, roleID: string, userID: string, userName: string }> {
    return this.http.post<{ token: string, roleID: string, userID: string, userName: string }>('/api/auth/login', user)
      .pipe(
        tap(
          ({token, roleID, userID}) => {
            localStorage.setItem('auth-token', token)
            localStorage.setItem('roleID', roleID)
            localStorage.setItem('userID', userID)
            this.setToken(token)
            this.setUserID(userID)
          }
        )
      )

  }

  updateTokenLogin(): Observable<Token> {
    debugger
    return this.http.patch<Token>(`/api/auth/update/${this.userID}`, {
      token: this.token
    })
  }

  updateTokenLogout(): Observable<Token> {
    return this.http.patch<Token>(`/api/auth/update/${this.userID}`, {
      token: ''
    })
  }

  isAuthenticated(): boolean {
    return !!this.token
  }


  setToken(token: string) {
    this.token = token
  }

  setUserID(userID: string) {
    this.userID = userID
  }

  getUserID(): string {
    return this.userID
  }

  getToken(): string {
    return this.token
  }

  logout() {
    this.setToken(null)
    localStorage.clear()
  }
}
