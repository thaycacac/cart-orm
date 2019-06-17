<template>
  <div>
    <navbar />
    <div class="container">
      <div class="wrap-cart">
        <div class="columns has-text-weight-bold header">
          <div class="column is-1">#Id</div>
          <div class="column is-6">Name</div>
          <div class="column is-1">Quantity</div>
          <div class="column is-1">Price</div>
          <div class="column is-1">Amount</div>
          <div class="column is-2">Action</div>
        </div>
        <order
          v-for="(order, index) in orders"
          :index="index + 1"
          :key="index"
          :id="order.id"
          :name="order.name"
          :price="order.price"
          :quantity="order.quantity"
        />
        <div class="button is-primary is-large checkout">Checkout</div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '@/components/product'
import Navbar from '@/components/navbar'
import Order from '@/components/order'
export default {
  components: {
    Product,
    Navbar,
    Order
  },
  data() {
    return {
      orders: [
        {
          'id': '1',
          'name': 'Cold Brew with Cascara Cold Foam',
          'price': 75,
          'quantity': 10,
        },
        {
          'name': 'Iced Coffee',
          'price': 60,
          'quantity': 8,
        },
        {
          'name': 'Iced Coffee with Milk',
          'price': 65,
          'quantity': 25,
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.wrap-cart {
  margin-top: 2rem;
  .checkout {
    float: right;
  }
}
</style>
