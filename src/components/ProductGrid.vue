<template>
  <div class="product-grid__container" v-if="products.length > 0">
    <Product
      v-for="product of products"
      v-bind:key="product.id"
      :id="product.id"
      :title="product.title"
      :image="product.image"
      :price="product.price"
    ></Product>
  </div>
  <div class="product-grid__no-products" v-else>
    <h2>No existen productos actualmente</h2>
  </div>
</template>

<script>
import Product from "./Product";

export default {
  name: "ProductGrid",
  components: {
    Product,
  },
  computed: {
    products: function () {
      return this.$store.state.productList;
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1600px) {
  .product-grid {
    &__container {
      padding: 8rem 20rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      row-gap: 4rem;
      column-gap: 2rem;
    }
  }
}
</style>