<template>
  <div class="home">
    <h1>Un peaso título de tienda</h1>
    <ProductGrid />
    <MenuButton
      :onClick="changeSideBar"
      buttonText="+"
      class="sidebarButton"
    ></MenuButton>

    <div :class="this.menu ? 'right-menu' : 'right-menu__closed'">
      <h1>Acciones BO <span @click="changeSideBar">X</span></h1>

      <div @click="changeModal()">Añadir Producto</div>
    </div>

    <Modal :active="this.showModal">
      <h3>Añadir nuevo producto</h3>
      <ProductForm />
    </Modal>
  </div>
</template>

<script>
//TODO: CREAR PRODUCT FORM Y PALANTE
import MenuButton from "../components/MenuButton.vue";
import ProductGrid from "../components/ProductGrid.vue";
import ProductForm from "../components/ProductForm.vue";
import Modal from "../components/Modal.vue";

export default {
  name: "Home",
  components: {
    ProductGrid,
    MenuButton,
    Modal,
    ProductForm,
  },
  data: function () {
    return {
      menu: false,
      showModal: false,
    };
  },
  methods: {
    changeSideBar: function () {
      this.menu = !this.menu;
    },
    changeModal: function () {
      this.showModal = !this.showModal;
    },
  },
};
</script>
<style lang="scss" scoped>
.right-menu {
  height: 100%;
  background-color: #ccc;
  width: 20rem;
  position: fixed;
  right: 0;
  top: 0;
  -webkit-transform: translate3d(calc(100% - 20rem), 0px, 0px);
  transform: translate3d(calc(100% - 20rem), 0px, 0px);
  visibility: visible;
  transition: all 0.5s ease 0s;
  -webkit-transition: all 0.5s ease 0s;
  display: block;

  &__closed {
    -webkit-transform: translate3d(calc(-100% - 20rem), 0px, 0px);
    transform: translate3d(calc(-100% - 20rem), 0px, 0px);
    visibility: visible;
    display: none;
  }
}

.sidebarButton {
  position: fixed;
  right: 6rem;
  bottom: 4rem;
  z-index: 2;
}
</style>
