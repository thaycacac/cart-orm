<template>
  <div>
    <navbar />
    <div class="container">
      <div class="columns wrap-products">
        <div class="column is-7">
          <figure class="image is-5by4">
            <img src="https://bulma.io/images/placeholders/256x256.png">
          </figure>
        </div>
        <div class="column is-5 wrap-content">
          <div>
            <h1 class="title is-1">{{ name }}</h1>
            <span class="tag is-light is-medium">${{ price }}</span>
            <div class="content">{{ description }}</div>
          </div>
          <div class="columns">
            <div class="column is-8">
              <input class="input" type="number" min="1" max="100" v-model="quantity">
            </div>
            <div class="column is-4">
              <a class="button is-primary button-add" @click="addOrder">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '@/components/product'
import Navbar from '@/components/navbar'

import ProductModel from '@/models/Product'
import OrderItemModel from '@/models/OrderItem'

export default {
  components: {
    Product,
    Navbar
  },
  data() {
    return {
      quantity: 1
    }
  },
  asyncData({ params }) {
    const product = ProductModel.find(params.slug)
    return product
  },
  methods: {
    addOrder() {
      this.$toast.show('Add ' + this.quantity + ' items to cart').goAway(2000)
      const orderItem = OrderItemModel.query().where('id', this.id).get()
      if (orderItem.length) {
        OrderItemModel.update({
          where: this.id,
          data: { quantity: (parseInt(this.quantity) + orderItem[0].quantity) }
        })
      } else {
        OrderItemModel.insert({
        data: {
            id: this.id,
            quantity: this.quantity,
            user_id: 1,
            order_id: 1,
            product_id: 1,
          }
        })
      }
      this.quantity = "1"
    }
  }
}
</script>

<style lang="scss">
.wrap-products {
  margin-top: 2rem;
  .wrap-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .content {
      margin-top: 2rem;
    }
  }
  .button-add {
    float: right;
  }
}
</style>
