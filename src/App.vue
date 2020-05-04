<template>
  <div id="app">
    <transition name="el-fade-in-linear" mode="out-in">
    <router-view />
    </transition>

  </div>
</template>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  font-family: "lucida grande", "lucida sans unicode", lucida, helvetica,
    "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}
</style>
