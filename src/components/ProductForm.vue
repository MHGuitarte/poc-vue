<template>
  <div class="product-form">
    <input type="text" v-model="productName" />
    <input type="url" v-model="productImgUrl" />
    <input type="number" v-model="productPrice" />
    <span
      :class="active ? 'product-form__error__visible' : 'product-form__error'"
    >
      Error al añadir el producto</span
    >
    <button @click="newProduct()">Añadir</button>
  </div>
</template>

<script>
export default {
  name: "ProductForm",
  data: function () {
    return {
      productName: "",
      productImgUrl: "",
      productPrice: 0,
      active: false,
    };
  },
  methods: {
    newProduct: function () {
      this.active = false;

      if (
        this.productName.length > 0 &&
        this.productImgUrl.length > 0 &&
        this.productPrice > 0
      ) {
        this.$store.commit("addProduct", {
          title: this.productName,
          image: this.productImgUrl,
          price: this.productPrice,
        });
      } else {
        this.active = true;
        console.error("Invalid product data");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.product-form {
  display: flex;
  flex-flow: column;
  align-items: center;

  > input {
    width: 80%;
    height: 3vh;
    margin: 0.5rem 0;
  }

  &__error {
    display: none;

    &__visible {
      color: firebrick;
      font-weight: bold;
      font-size: large;
      display: block;
    }
  }
}
</style>