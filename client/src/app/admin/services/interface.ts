import { RoleName } from '../../main/shared/interface'

export interface Users {
  _id?: string
  firstName?: string
  createDate?: number
  userPrice?: number
  roleID: RoleName
}
