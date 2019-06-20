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
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductModel from '@/models/Product'
import OrderModel from '@/models/Order'

import Product from '@/components/product'
import Navbar from '@/components/navbar'

import { initProduct, initOrder } from '@/data'
import { getters } from 'vuex'

export default {
  components: {
    Product,
    Navbar
  },
  async fetch () {
    const initialProduct = await initProduct()
    ProductModel.create({ data: initialProduct })   
    const initialOrder = await initOrder()
    OrderModel.create({ data: initialOrder })
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
