<template>
  <div id="topMenu">
    <div id="left">
      <p @click="home">CodeHappier</p>
    </div>
    <div id="menu">
      <the-menu></the-menu>
    </div>
    <div id="collapseMenu">
      <collapseMenu></collapseMenu>
    </div>
    <userProfile></userProfile>
  </div>
</template>

<script>
import collapseMenu from "./collapseMenu";
import theMenu from "./menu";
import userProfile from "./user-profile";
export default {
  name: "top_header",
  data() {
    return {};
  },
  components: {
    collapseMenu,
    theMenu,
    userProfile
  },

  methods: {
    home() {
      this.$router.push({ name: "home" });
    }
  },
  created() {}
};
</script>

<style lang="less" scoped>
@height: 3em;
#topMenu {
  width: 100%;
  height: @height;
  line-height: @height;
  display: flex;
  justify-content: space-around;
  box-shadow: 2px 1px 12px rgb(214, 129, 129);
  background-color: deeppink;
  /*position: fixed;*/
  /*top: 0;*/
  z-index: 999;
  #left {
    p {
      font-size: 1rem;
      color: #fff;
      cursor: pointer;
      transition: 2s ease-out;
    }
    p:hover {
      transform: scale(1.2);
    }
  }
  #collapseMenu {
    display: none;
  }
  #userProfile {
    height: @height;
    img {
      vertical-align: middle;
      border-radius: 12px;
    }
  }
  @media screen and (max-width: 800px) {
    #menu_item,
    #userProfile {
      position: absolute;
      transform: translateY(-@height);
      opacity: 0;
    }
    #collapseMenu {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    #topMenu {
      justify-content: space-between;
      height: 2rem;
    }
  }
}
</style>
