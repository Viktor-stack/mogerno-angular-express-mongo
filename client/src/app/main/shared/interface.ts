export interface User {
  email: string
  password: string
}

export interface ProfileUser {
  _id?: string
  userName?: string
  createDate?: number
  avatarName?: string
  userPrice?: number
  email?: string
  token?: string
  roleID?: RoleName
}

export interface RoleName {
  _id?: string
  roleName: string
}


export interface RegisterUser {
  userName?: string
  email: string
  password: string
  avatarName?: string
  message: string
}
