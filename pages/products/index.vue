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
  fetch() {
    if (!ProductModel.query().count()) {
      const initialProduct = initProduct()
      ProductModel.create({ data: initialProduct })
    }
    if (!OrderModel.query().count()) {
      const initialOrder = initOrder()
      OrderModel.create({ data: initialOrder })
    }
  }
}
</script>

<style lang="scss">
.wrap-products {
  margin-top: 32px;
}
</style>
