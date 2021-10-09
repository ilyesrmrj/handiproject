import { User } from '../../../shared/types/Users'
import * as api from './api.service'

export const getUser = () => {
  api.get<User>(`user/me`)
}
