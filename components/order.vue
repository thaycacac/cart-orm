<template>
  <div class="box columns">
    <div class="column is-1">{{ index }}</div>
    <div class="column is-6">{{ name }}</div>
    <div v-if="!edit" class="column is-1">{{ quantityFake }}</div>
    <div v-else class="column is-1">
      <input type="number" class="input" v-model="quantityFake" />
    </div>
    <div class="column is-1">${{ price }}</div>
    <div class="column is-1">${{ quantityFake * price }}</div>
    <div class="column is-2">
      <div class="buttons has-addons">
        <span  v-if="!edit" class="button" @click="edit = !edit">Edit</span>
        <span v-if="edit" class="button" @click="editOrder">Done</span>
        <span class="button" @click="deleteOrder">Delete</span>
      </div>
    </div>
  </div>
</template>

<script>
import OrderItemModel from '@/models/OrderItem'

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
  },
  data() {
    return  {
      edit: false,
      quantityFake: this.quantity
    }
  },
  methods: {
    editOrder() {
      this.edit = false
      OrderItemModel.update({
        where: this.id,
        data: {
          quantity: this.quantityFake
        }
      })
    },
    deleteOrder() {
      OrderItemModel.delete({
        where: this.id
      })
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
