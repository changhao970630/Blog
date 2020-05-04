<template>
  <div id="collapseMenu">
    <label for="menu" @click="toogleMenu" :class="{notCollapse:toogleShow}">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <input type="checkbox" name="id" id="menu" v-model="toogleShow" style="display: none" />
  </div>
</template>

<script>
import $bus from "../../tools/bus";

export default {
  data() {
    return {
      toogleShow: false
    };
  },
  methods: {
    toogleMenu() {
      this.toogleShow = !this.toogleShow;
      $bus.$emit("toogleMenuEmit", this.toogleShow);
    }
  }
};
</script>

<style lang="less" scoped>
#collapseMenu {
  box-shadow: 2px 2px 16px rgb(53, 53, 109);

  span {
    display: block;
    width: 2rem;
    height: 0.3rem;
    background-color: rgba(255, 255, 255, 0.753);
    margin: 0.2rem;
    transition: 0.8s ease;
    transform-origin: center;
  }

  .notCollapse {
    span:nth-of-type(1) {
      transform: rotateZ(45deg) translateY(1rem) translateX(-0.2rem);
    }

    span:nth-of-type(2) {
      opacity: 0;
    }

    span:nth-of-type(3) {
      transform: rotateZ(-45deg) translateY(-1rem) translateX(-0.2rem);
    }
  }
}
</style>
