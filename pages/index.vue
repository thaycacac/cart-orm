<template>
  <div class="container">
    <form class="box box-login">
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input class="input" type="text" placeholder="e.g thaycacac">
        </div>
      </div>
      <div class="field">
        <label class="label">Fullname</label>
        <div class="control">
          <input class="input" type="text" placeholder="e.g. Pham Ngoc Hoa">
        </div>
      </div>
      <div class="control">
        <button class="button is-primary">Login</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
.box-login {
  width: 50%;
  margin: 2rem auto;
}
</style>
