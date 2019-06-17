<template>
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
</template>

<script>
import Product from '@/components/product'
export default {
  components: {
    Product
  }
}
</script>

<style lang="scss">
.wrap-products {
  margin-top: 2rem;
}
</style>
