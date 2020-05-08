<template>
  <div id="modalMenu">
    <el-button @click="recently">最近文章</el-button>
  </div>
</template>

<script>
import bus from "../../tools/bus";
export default {
  name: "modalMenu",
  methods: {
    recently() {
      bus.$emit("toogleMenuEmit", false);
      this.$router.push({ name: "about" });
    }
  }
};
</script>

<style lang="less" scoped>
#modalMenu {
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  position: absolute;
  z-index: 99999;
}
</style>
