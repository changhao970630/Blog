import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import rq from "./http/requst";
import apiUrl from "./http/apiUrl";
import "./components/global/index";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import animated from "animate.css";
import hljs from "highlight.js";
import "highlight.js/styles/solarized-dark.css"; //样式文件
import c_confirm_vm from "./components/extends/confirm";
import c_prompt_fn from "./components/extends/prompt";
Vue.prototype.c_confirm = c_confirm_vm;
Vue.prototype.c_prompt = c_prompt_fn;
Vue.directive("highlight", function(el) {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
});
Vue.use(animated);
Vue.use(mavonEditor);
Vue.prototype.rq = rq;
Vue.prototype.apiUrl = apiUrl;
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
