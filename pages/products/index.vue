<template>
  <div>
    <navbar />
    <div class="container">
      <div class="columns wrap-products">
        <div v-for="(product, index) in products" :key="index" class="column">
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

export default {
  components: {
    Product,
    Navbar
  },
  computed: {
    products() {
      return ProductModel.all()
    }
  },
  async fetch() {
    if (!ProductModel.all().length) {
      const initialProduct = await initProduct()
      ProductModel.create({ data: initialProduct })
    }
    if (!OrderModel.all().length) {
      const initialOrder = await initOrder()
      OrderModel.create({ data: initialOrder })
    }
  }
}
</script>

<style lang="scss">
.wrap-products {
  margin-top: 2rem;
}
</style>
