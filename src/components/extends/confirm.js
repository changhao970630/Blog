import Vue from "vue";
import c_confirm from "./confirm.vue"; //当组件hejs文件名称一样一定要加后缀

let C_Confirm = Vue.extend(c_confirm); // 构造函数
const c_confirm_vm = (options) => {
  if (typeof options == "string") {
    options = {
      message: options,
    };
  }
  const vm = new C_Confirm({
    data: options.data,
    propsData: options.props,
  });
  let currentMsg;
  C_Confirm.prototype.callback = function(action) {
    if (action === "confirm") {
      currentMsg.reslove("confirm");
    }
    currentMsg.reject("cancle");
  };
  vm.$mount();
  document.body.append(vm.$el);
  vm.visible = true;
  return new Promise((reslove, reject) => {
    currentMsg = {
      reslove,
      reject,
    };
  });
}; //在外部调用这个函数将组件渲染出来！

export default c_confirm_vm;
