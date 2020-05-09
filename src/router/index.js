import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router";
import { getToken } from "../tools/common";
import { Message } from "element-ui";
Vue.use(VueRouter);
const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => {
    error;
    Message.info("正在浏览当前页面喔！");
  });
};
router.beforeEach((to, form, next) => {
  // console.log(to.name);
  let TOKEN = getToken();
  if (
    TOKEN ||
    to.name == "home" ||
    to.name == "about" ||
    to.name == "contact" ||
    to.name == "login" ||
    to.name == "details"
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
