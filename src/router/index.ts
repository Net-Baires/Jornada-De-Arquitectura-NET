import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import ComingSoon from "../views/ComingSoon.vue";
import Live from "../views/Live.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/coming-soon",
    name: "ComingSoon",
    component: ComingSoon,
  },
  {
    path: "/live",
    name: "ComingSoon",
    component: ComingSoon,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
