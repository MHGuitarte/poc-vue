<template>
  <div :class="active ? 'modal__active' : 'modal'">
    <div class="modal__container">
      <button @click="closeModal()">X</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false,
    },
  },methods: {
    closeModal:function () {
      this.active = !this.active;
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  display: none;

  &__active {
    background-color: rgba(34, 34, 34, 0.3);
    z-index: 10;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
  }

  &__container {
    background-color: white;
    position: relative;
    width: 30rem;
    height: 30rem;
    left: calc(50% - 15rem);
    top: calc(50% - 15rem);
  }
}
</style>