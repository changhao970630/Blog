<template>
  <div id="modal" @click="modalColse"></div>
</template>

<script>
export default {
  name: "c_modal",
  methods: {
    modalColse() {
      this.$emit("modalColse");
    }
  }
};
</script>

<style lang="less" scoped>
#modal {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.425);
  position: absolute;
  z-index: 1;
}
</style>