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
import "./style/common.less";
import animated from "animate.css";
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
