<template>
  <div class="box columns">
    <div class="column is-1">{{ index }}</div>
    <div class="column is-6">{{ name }}</div>
    <div class="column is-1">{{ quantity }}</div>
    <div class="column is-1">${{ price }}</div>
    <div class="column is-1">${{ quantity * price }}</div>
    <div class="column is-2">
      <div class="buttons has-addons">
        <span class="button">Edit</span>
        <span class="button">Delete</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  margin-top: 1rem;
  margin-right: 0 !important;
  margin-left: 0 !important;
}
</style>
