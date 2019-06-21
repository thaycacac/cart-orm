import { Model } from '@vuex-orm/core'
import Product from './Product'
import Order from './Order'

export default class OrderItem extends Model {
  static entity = 'order_items'

  static fields () {
    return {
      id: this.increment(),
      order_id: this.attr(null),
      product_id: this.attr(null),
      quantity: this.number(0),
      product: this.belongsTo(Product, 'product_id'),
      order: this.belongsTo(Order, 'order_id')
    }
  }
}