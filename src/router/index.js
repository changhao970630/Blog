import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router";
import { getToken } from "../tools/common";
import { Message } from "element-ui";
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, form, next) => {
  // console.log(to.name);
  let TOKEN = getToken();
  if (
    TOKEN ||
    to.name == "home" ||
    to.name == "about" ||
    to.name == "contact" ||
    to.name == "login"
  ) {
    document.title = to.meta.title ? to.meta.title : "404";
    next();
  } else {
    Message({
      showClose: true,
      message: "请先登录哈~O(∩_∩)O~~",
      type: "warning",
    });
    router.push("/login");
  }
});

export default router;
