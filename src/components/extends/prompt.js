import Vue from "vue";
import c_prompt from "./prompt.vue";
const c_promptContruct = Vue.extend(c_prompt);
const c_prompt_fn = (options) => {
  console.log(options);
  if (typeof options === "string") {
    options = {
      title: options,
    };
  }
  let savePromis = {};

  const callBack = (...params) => {
    if (params[0] == "confirm") {
      savePromis.reslove(params[1]);
    } else {
      savePromis.reject();
    }
  };

  const vm = new c_promptContruct({
    data: options,
    propsData: options.props,
  });
  vm.callBack = callBack;
  console.log(vm);
  vm.$mount();
  document.body.append(vm.$el);
  vm.remove = () => {
    document.body.remove(vm.$el);
  };
  return new Promise((reslove, reject) => {
    savePromis = {
      reslove,
      reject,
    };
  });
};

export default c_prompt_fn;
