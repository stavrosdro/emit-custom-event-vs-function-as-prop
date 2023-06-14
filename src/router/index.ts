import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import EmitView from "../views/EmitView.vue";
import HandlerView from "../views/HandlerView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: "/emit",
  },
  {
    path: "/emit",
    name: "emit",
    component: EmitView,
  },
  {
    path: "/handler",
    name: "handler",
    component: HandlerView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
