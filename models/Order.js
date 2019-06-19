import { Model } from '@vuex-orm/core'
import OrderItem from './OrderItem'

export default class Order extends Model {
  static entity = 'orders'

  static fields () {
    return {
      id: this.increment(),
      user_id: this.attr(null),
      order_items: this.hasMany(OrderItem, 'order_id')
    }
  }
}