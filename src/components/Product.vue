<template>
  <div class="product">
    <img
      class="product__img"
      :src="image ? image : '../assets/default.png'"
      :alt="title"
    />
    <h3 class="product__name">{{ title }}</h3>
    <h4 class="product__price">{{ price }}€</h4>
    <div class="product__button-add">Añadir</div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1600px) {
  .product {
    display: flex;
    flex-flow: column;
    width: 14rem;
    box-shadow: 3px 3px 6px 3px rgba($color: #009771, $alpha: 0.1);
    padding: 1rem;

    &:hover {
      cursor: pointer;
      box-shadow: 0 0 3px 3px rgba($color: #009771, $alpha: 0.3);
    }

    &__img {
      width: 10rem;
      height: 10rem;
      align-self: center;
      object-fit: contain;
    }

    &__name {
      margin: 0.5rem 1rem;
    }

    &__price {
      margin: 0.5rem 1rem;
    }

    &__button-add {
      align-self: center;
      width: 60%;
      text-align: center;
      background-color: #009771;
      font-weight: bold;
      color: white;
      padding: 0.5rem;
      margin: 1rem 0;
      border-radius: 8px 8px 8px 0;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      &:hover {
        cursor: pointer;
        box-shadow: 3px 3px 6px 3px rgba($color: #adadad, $alpha: 0.3);
      }

      &:active {
        box-shadow: 0 0 6px 6px rgba($color: #adadad, $alpha: 0.6);
      }
    }
  }
}
</style>