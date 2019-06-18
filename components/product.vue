<template>
  <div  class="card">
    <nuxt-link class="card-image" :to="`/products/${id}`">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </nuxt-link>
    <div class="card-content">
      <div class="media wrap-content">
        <div class="media-content">
          <p class="title is-4">{{ name }}</p>
          <span class="tag is-light is-medium">${{ price }}</span>
        </div>
      </div>
      <div class="content">
        {{ description | getDescription }}
      </div>
      <div class="columns">
        <div class="column is-7">
          <input
            class="input is-small"
            type="number"
            value="1"
            min="1"
            max="100"
            v-model="quantity"
          />
        </div>
        <div class="column is-5">
          <a class="button is-primary is-small" @click="addOrder">Add to cart</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
    description: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      quantity: 1,
    }
  },
  filters: {
    getDescription: function(description) {
      const res =
        description.substring(0, 100) + '...'
      return res
    },
  },
  methods: {
    addOrder() {
      this.$emit('updateOrder', {
        'id': this.id,
        'name': this.name,
        'price': this.price,
        'quantity': parseInt(this.quantity)
      })
      this.quantity = "1"
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap-content {
  margin: 0 !important;
  .media-content {
    display: flex;
    justify-content: space-between;
  }
}
</style>
