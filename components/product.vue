<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media wrap-content">
        <div class="media-content">
          <p class="title is-4">John Smith</p>
          <span class="tag is-light is-medium">$75</span>
        </div>
      </div>
  
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris.
      </div>
      <div class="columns">
        <div class="column is-7">
          <input class="input is-small" type="number" value="1" min="1" max="100">
        </div>
        <div class="column is-5">
          <a class="button is-primary is-small">Add to cart</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap-content {
  margin: 0 !important;
  .media-content {
    display: flex;
    justify-content: space-between;
  }
}
</style>
