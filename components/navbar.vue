<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">
          Hello Thaycacac
        </a>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <nuxt-link class="button is-primary" to="/cart">
                Cart
                <span class="number-order">
                  {{ numberOrderItem }}
                </span>
              </nuxt-link>
              <a class="button is-light">
                Log out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import OrderItemModel from '@/models/OrderItem'
export default {
  computed: {
    numberOrderItem() {
      return OrderItemModel.all().length
    }
  }
}
</script>

<style lang="scss" scoped>
.number-order {
  margin-left: 5px;
  width: 23px;
  height: 23px;
  border-radius: 13px;
  background: rgba(0, 255, 42, 0.692);
}
</style>
