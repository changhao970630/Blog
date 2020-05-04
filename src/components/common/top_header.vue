<template>
  <div id="topMenu">
    <div id="left">
      <p>CodeHappier</p>
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

  methods: {},
  created() {}
};
</script>

<style lang="less" scoped>
@height: 3rem;
#topMenu {
  width: 100%;
  height: @height;
  line-height: @height;
  display: flex;
  justify-content: space-around;
  box-shadow: 2px 6px 12px rgb(41, 41, 104);
  background-color: rgb(49, 21, 105);
  /*position: fixed;*/
  /*top: 0;*/
  z-index: 999;
  #left {
    p {
      font-size: 1.2rem;
      color: #fff;
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
    }
  }
}
</style>
