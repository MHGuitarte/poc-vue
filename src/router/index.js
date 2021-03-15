
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/error",
    name: "AccessError",
    meta: { authRequired: false },
    component: () => import("../views/AccessError.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.authRequired) {
    if (sessionStorage.getItem("token") != null) {
      return next();
    } else {
      return next({ name: "AccessError" });
    }
  } else {
    return next();
  }
});

export default router;
