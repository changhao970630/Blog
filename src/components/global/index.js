// const components = require.context(".",false,/\.vue/)

// console.log(components)

import Vue from "vue";

let contexts = require.context(".", false, /\.vue/);

contexts.keys().map((component) => {
  let componentEntity = contexts(component).default;
  Vue.component(componentEntity.name, componentEntity);
});
