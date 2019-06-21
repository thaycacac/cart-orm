import { Model } from '@vuex-orm/core'
import Order from './Order'

export default class User extends Model {
  static entity = 'users'

  static fields () {
    return {
      id: this.increment(),
      username: this.string(''),
      fullname: this.string(''),
      orders: this.hasMany(Order, 'user_id')
    }
  }
}