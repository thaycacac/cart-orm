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
            <h1 class="title is-1">John Smith</h1>
            <span class="tag is-light is-medium">$75</span>
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
            </div>
          </div>
          <div class="columns">
            <div class="column is-8">
              <input class="input" type="number" value="1" min="1" max="100">
            </div>
            <div class="column is-4">
              <a class="button is-primary button-add">Add to cart</a>
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
