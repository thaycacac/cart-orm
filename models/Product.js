import { Model } from '@vuex-orm/core'

export default class Product extends Model {
  static entity = 'products'

  static fields() {
    return {
      id: this.increment(),
      name: this.string(''),
      description: this.string(''),
      price: this.number(0)
    }
  }
}
