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
* {
  margin: 0;
  padding: 0;
  font-family: "Gill Sans", sans-serif;
}
html,
body {
  width: 100%;
  height: 100%;
  min-width: 300px;
  font-size: 20px;
  overflow: hidden;
  background-size: 100% 100%;
}
body::-webkit-scrollbar {
  width: 0px;
  background-image: linear-gradient(transparent, red);
}
#app {
  height: 100%;
}
@headerBgc: rgb(49, 21, 105);
</style>
