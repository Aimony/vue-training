/*
 * @Author: Aimony
 * @Date: 2024-09-24 17:11:00
 * @LastEditors: Aimony
 * @FilePath: \vue-training\src\router\index.js
 */
import { createRouter, createWebHashHistory } from "vue-router";

import Rate from "@/pages/Rate/Rate.vue";
import Add from "@/pages/Add/Add.vue";
import Movie from "@/pages/Movie/Movie.vue";
import Home from "@/pages/Home/Home.vue";


export const routes = [
  {
    path: "/",
    name: "home",
    description: "主页",
    component: () => import("../pages/Home/Home.vue")
  },
  {
    path: "/add",
    name: "add",
    description: "增加标题和按钮",
    component: () => import("../pages/Add/Add.vue")
  },
  {
    path: "/movie",
    name: "movie",
    description: "选择电影",
    component: () => import("../pages/Movie/Movie.vue")
  },
  {
    path: "/rate",
    name: "rate",
    description: "汇率转换",
    component: () => import("../pages/Rate/Rate.vue")
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router