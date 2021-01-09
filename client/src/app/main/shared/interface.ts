export interface User {
  email: string
  password: string
}

export interface ProfileUser {
  _id?: string
  firstName?: string
  lastName?: string
  createDate?: number
  companyName?: string
  addressLine1?: string
  addressLine2?: string
  avatarName?: string
  city?: string
  region?: string
  postalCode?: number
  userPrice?: number
  email?: string
  token?: string
  roleID?: RoleName
  countryID?: Country
}

export interface Token {
  token: string
}

export interface Country {
  _id: string
  countryName: string
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


export interface Country {
  _id: string
  countryName: string
}

export interface ILoader {
  isLoading: boolean
}
