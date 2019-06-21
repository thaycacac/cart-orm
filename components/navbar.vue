<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item has-text-bold" to="/products">
          Simple cart
        </nuxt-link>
        <p class="navbar-item">Hello {{ fullname }}</p>
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
              <a class="button is-light" @click="logout">
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
import UserModel from '@/models/User'
export default {
  computed: {
    numberOrderItem() {
      return OrderItemModel.all().length
    },
    fullname() {
      try {
        return UserModel.all()[0].fullname
      } catch(e) {
        return ''
      }
    }
  },
  methods: {
    logout() {
      console.log('abcde')
      UserModel.create({ data: {
        id: null,
        username: null,
        fullname: null
      } })
        .then(() => {
          this.$router.push('/')
        })
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
