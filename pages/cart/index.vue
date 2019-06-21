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
          v-for="(order, index) in orderItems"
          :index="index + 1"
          :key="index"
          :id="order.id"
          :name="order.product.name"
          :price="order.product.price"
          :quantity="order.quantity"
        />
        <p class="title is-3 has-text-right">Total: {{ total }}$</p>
        <div class="button is-primary is-large checkout">Checkout</div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '@/components/product'
import Navbar from '@/components/navbar'
import Order from '@/components/order'
import OrderItemModel from '@/models/OrderItem'
import OrderModel from '@/models/Order'
export default {
  components: {
    Product,
    Navbar,
    Order
  },
  computed: {
    orderItems() {
      try {
        const listOrder = OrderModel
          .query()
          .with('order_items')
          .with('user')
          .find(1)
          .order_items
          .map(order_item => {
            return OrderItemModel
              .query()
              .with('product')
              .find(order_item.id)
          })
        return listOrder
      } catch(e) {
        return []
      }
    },
    total() {
      try {
        let total = 0;
        this.orderItems.forEach(item => {
          total += item.quantity * item.product.price
        });
        return total
      } catch(e) {
        return 0
      }
    }
  },
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