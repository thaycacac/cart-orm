<template>
  <div>
    <navbar />
    <div class="container">
      <div class="columns wrap-products">
        <div class="column" v-for="(product, index) in products" :key="index">
          <product
            :id="product.id"
            :name="product.name"
            :price="product.price"
            :description="product.description"
            @updateOrder="addOrder($event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductModel from '@/models/Product'
import Product from '@/components/product'
import Navbar from '@/components/navbar'
import { initProduct } from '@/data'
import { getters } from 'vuex'
export default {
  components: {
    Product,
    Navbar
  },
  data() {
    return {
      orders: [],
    }
  },
  async fetch () {
    const initialData = await initProduct()
    ProductModel.create({ data: initialData })
  },
  methods: {
    addOrder(order) {
      const isOrder = this.orders.find(item => {
        return item.id === order.id
      })
      if (isOrder) {
        const indexUpdate = this.orders.findIndex(item => {
          return item.id === order.id
        })
        this.orders[indexUpdate].quantity = parseInt(isOrder.quantity) + parseInt(order.quantity)
      } else {
        this.orders.push(order)
      }
    }
  },
  computed: {
    products() {
      return ProductModel.all()
    }
  }
}
</script>

<style lang="scss">
.wrap-products {
  margin-top: 2rem;
}
</style>
