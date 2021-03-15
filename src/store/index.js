import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalActive: false,
    productsId: 1,
    productList: [{
      id: 1,
      title: "Producto ejemplo",
      image: "https://picsum.photos/600",
      price: 4.32
    },],
    cartList: [],
  },
  mutations: {
    addProduct: (state, { title, image, price }) => {
      let existingProducts = state.productList.filter(product => product.title === title);

      if (existingProducts.length > 0) {
        throw new Error("El producto ya existe.");
      }

      state.productsId = state.productsId++;

      state.productList = [...state.productList, { id: state.productsId, title: title, image: image, price: price }];
    },

    addToCart: (state, { product, quantity }) => {
      /**
       * Look for cart from cartList (use sessionStorage)
       * check if product exists in cart
       * add product if not, add quantity if exists
       * store cart again in cartList
       */
    },
    removeFromCart: (state, { product, quantity }) => {
      /**
       * Same as addToCart, but removing instead of adding
       */
    },
    emptyCart: (state) => {
      /**
       * Look for cart from cartList using sessionStorage
       * set cart empty
       */
    },
    addProductId: (state) => {
      state.productsId = state.productsId++;
      return state.productsId;
    }
  }
});
