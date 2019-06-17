<template>
  <div>
    <navbar />
    <div class="container">
      <div class="columns wrap-products">
        <div class="column">
          <product />
        </div>
        <div class="column">
          <product />
        </div>
        <div class="column">
          <product />
        </div>
        <div class="column">
          <product />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '@/components/product'
import Navbar from '@/components/navbar'
export default {
  components: {
    Product,
    Navbar
  }
}
</script>

<style lang="scss">
.wrap-products {
  margin-top: 2rem;
}
</style>
