<template>
  <div class="container">
    <form class="box box-login" @submit.prevent="login">
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="e.g thaycacac"
            v-model="username"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Fullname</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="e.g. Pham Ngoc Hoa"
            v-model="fullname"
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
      UserModel.create({ data:  {
        id: 1,
        username: 'thaycacac',
        fullname: 'Pham Ngoc Hoa'
      } }).then(() => {
        this.$router.push('/products')
      })
    }
  }
}
</script>

<style lang="scss">
.box-login {
  width: 50%;
  margin: 2rem auto;
}
</style>
