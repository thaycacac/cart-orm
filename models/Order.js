import { Model } from '@vuex-orm/core'
import OrderItem from './OrderItem'
import User from './User'

export default class Order extends Model {
  static entity = 'orders'

  static fields () {
    return {
      id: this.increment(),
      user_id: this.attr(null),
      order_items: this.hasMany(OrderItem, 'order_id'),
      user: this.belongsTo(User, 'user_id')
    }
  }
}