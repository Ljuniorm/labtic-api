import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home")
  },
  {
    path: "/Parametros",
    name: "Parametros",
    component: () => import("../views/Parametros")
  },
  {
    path: "/Api",
    name: "Api",
    component: () => import("../views/Api")
  }

];
const router = new VueRouter({
  routes,
  mode: 'history',
});
export default router;
