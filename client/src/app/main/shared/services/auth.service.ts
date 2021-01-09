import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {ProfileUser, RegisterUser, RoleName, User} from '../interface'
import {tap} from 'rxjs/operators'

interface Token {
  token: string
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token = null
  private userID: string

  constructor(private http: HttpClient) {
  }


  login(user: User): Observable<{ token: string, roleID: RoleName, userID: string, userName: string }> {
    return this.http.post<{ token: string, roleID: RoleName, userID: string, userName: string }>('/api/auth/login', user)
      .pipe(
        tap(
          ({token, roleID, userID}) => {
            localStorage.setItem('auth-token', token)
            localStorage.setItem('roleID', roleID._id)
            localStorage.setItem('userID', userID)
            this.setToken(token)
            this.setUserID(userID)
          }
        )
      )

  }

  register(user: RegisterUser, image?: File): Observable<Object> {
    const fd = new FormData()
    if (image) {
      fd.append('avatarName', image, image.name)
      fd.append('firstName', user.userName)
      fd.append('password', user.password)
      fd.append('email', user.email)
    }
    return this.http.post('/api/auth/register', fd)
  }


  updateTokenLogin(): Observable<Token> {
    return this.http.patch<Token>(`/api/auth/update/${this.userID}`, {
      token: this.token
    })
  }

  updateTokenLogout(): Observable<Token> {
    return this.http.patch<Token>(`/api/auth/update/${this.userID}`, {
      token: null
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
