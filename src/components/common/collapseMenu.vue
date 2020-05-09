<template>
  <div id="collapseMenu">
    <label for="menu" @click="toogleCollapse" :class="{notCollapse:isCollapse}">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    }
  },

  methods: {
    toogleCollapse() {
      this.$store.commit("toogleCollapse", !this.isCollapse);
    }
  }
};
</script>

<style lang="less" scoped>
#collapseMenu {
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
