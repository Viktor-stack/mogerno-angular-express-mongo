import { RoleName } from '../../main/shared/interface'

export interface Users {
  _id?: string
  userName?: string
  createDate?: number
  userPrise?: number
  roleID: RoleName
}
