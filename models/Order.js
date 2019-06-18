import { Model } from '@vuex-orm/core'
import User from './User'
import Product from './Product'

export default class Order extends Model {
  static entity = 'orders'

  static fields () {
    return {
      id: this.increment(),
      user_id: this.number(0),
      product_id: this.number(0),
      product: this.hasMany(Product, 'product_id'),
      user: this.belongsTo(User, 'user_id'),
      quantity: this.number(0)
    }
  }
}