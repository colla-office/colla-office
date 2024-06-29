import { createRouter, createWebHashHistory } from 'vue-router'
import routerMap from "@/router/routerMap";

const Router = createRouter({
  history: createWebHashHistory(),
  routes: routerMap,
})

export default Router
