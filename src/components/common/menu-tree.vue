<template>
  <div id="menu">
    <div id="menu-item" v-for="(item,index) in data" :key="index">
      <template v-if="item.children">
        <div @click="clickIndex(index)">
          <span>{{item.title}}</span>
          <i class="el-icon-arrow-down" v-if="index!== activeIndex"></i>
          <i class="el-icon-arrow-up" v-else></i>
        </div>
        <div id="c_menu_item" :class="{show:index=== activeIndex}">
          <menu-tree :data="item.children"></menu-tree>
        </div>
      </template>
      <template v-else>
        <router-link tag="div" :to="{name:item.meta.name}">
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuTree",
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      activeIndex: ""
    };
  },
  methods: {
    clickIndex(index) {
      if (this.activeIndex) {
        this.activeIndex = "";
      } else {
        this.activeIndex = index;
      }
    },
    routerPush(name) {
      console.log(name);
      this.$router.push({ name });
    }
  }
};
</script>

<style lang="less" scoped>
@media screen and (max-width: 800px) {
  #menu {
    float: left;
    opacity: 0;
    width: 0;
    overflow: hidden;
  }
}
#menu {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  transition: 1s ease;
  cursor: pointer;
  #menu-item {
    font-size: 0.88rem;
    margin: 0px 1rem;
    text-align: center;
    transition: 0.5s ease;
    border-radius: 12px;
    color: rgb(255, 255, 255);
    .show {
      width: 100%;
      position: absolute;
      display: block !important;
      width: 10rem;
      display: flex;
      flex-direction: column;
      background-color: sandybrown;
    }
    #c_menu_item {
      display: none;
    }
  }
  #menu-item:hover {
    color: rgb(192, 212, 103);
  }
  .router-link-exact-active {
    color: yellow;
  }
}
</style>
