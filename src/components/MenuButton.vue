<template>
  <div class="menuButton" @click="onClick">
    <span class="menuButton__text">{{ buttonText }}</span>
  </div>
</template>

<script>
export default {
  name: "MenuButton",
  props: {
    buttonText: {
      type: String,
      required: true,
      default: "menu",
    },
    onClick:{
        type: Function,
        required: true,
    }
  },
};
</script>

<style lang="scss" scoped>
.menuButton {
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 100px;

  user-select: none;
  background-color: #009771;
  color: white;

  &:hover {
    cursor: pointer;
    box-shadow: 3px 3px 6px 3px rgba($color: #adadad, $alpha: 0.3);
  }

  &:active {
    box-shadow: 0 0 6px 6px rgba($color: #adadad, $alpha: 0.6);
  }

  &__text {
    width: 100%;
    font-size: xx-large;
    align-self: center;
    justify-self: center;
    text-align: center;
  }
}
</style>