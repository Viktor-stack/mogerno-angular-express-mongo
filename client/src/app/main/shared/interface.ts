export interface User {
  email: string
  password: string
}

export interface ProfileUser {
  _id?: string
  userName?: string
  createDate?: number
  userPrise?: number
  email?: string
  roleID: RoleName
}

export interface RoleName {
  _id: string
  name: string
}
