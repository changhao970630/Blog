<template>
  <div>
    <div>
      <menu-tree :data="menuList"></menu-tree>
    </div>
  </div>
</template>

<script>
import menuTree from "./menu-tree";
export default {
  name: "theMenu",
  components: {
    menuTree
  },
  data() {
    return {
      menuList: [
        {
          title: "最近更新",
          icon: "el-icon-s-opportunity\n",
          meta: { name: "home" }
        },
        {
          title: "添加文章",
          icon: "el-icon-edit-outline",
          meta: { name: "blog" }
        },
        {
          title: "网站&简历",
          icon: "el-icon-warning",
          meta: { name: "about" }
        },
        {
          title: "联系我",
          icon: "el-icon-phone-outline",
          meta: { name: "contact" }
        }
      ],
      activeIndex: ""
    };
  }
};
</script>

<style lang="less" scoped>
</style>
