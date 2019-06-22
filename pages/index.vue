<template>
  <div class="container">
    <form class="box box-login" @submit.prevent="login">
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input
            v-model="username"
            class="input"
            type="text"
            placeholder="e.g thaycacac"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Fullname</label>
        <div class="control">
          <input
            v-model="fullname"
            class="input"
            type="text"
            placeholder="e.g. Pham Ngoc Hoa"
          />
        </div>
      </div>
      <div class="control">
        <button class="button is-primary">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import UserModel from '@/models/User'

export default {
  data() {
    return {
      username: '',
      fullname: ''
    }
  },
  methods: {
    login() {
      UserModel.create({
        data: {
          id: 1,
          username: this.username,
          fullname: this.fullname
        }
      }).then(() => {
        this.$router.push('/products')
      })
    }
  }
}
</script>

<style lang="scss">
.box-login {
  width: 50%;
  margin: 32px auto;
}
</style>
