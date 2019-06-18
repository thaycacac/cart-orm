import { Model } from '@vuex-orm/core'
import Order from './Order'

export default class User extends Model {
  static entity = 'products'

  static fields () {
    return {
      id: this.increment(),
      name: this.string(''),
      description: this.string(''),
      price: this.number(0),
      orders: this.belongsToMany(Order, 'product_id')
    }
  }
}