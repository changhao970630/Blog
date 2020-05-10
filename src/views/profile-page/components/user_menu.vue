<template>
  <div id="user_menu">
    <router-link :to="{name:'user_home'}" tag="div" id="user-menu-item" des="Hmi">
      <i class="el-icon-s-home"></i>
    </router-link>
    <router-link :to="{name:'user_blog'}" tag="div" id="user-menu-item" des="Blog">
      <i class="el-icon-reading"></i>
    </router-link>
    <router-link :to="{name:'user_tags'}" tag="div" id="user-menu-item" des="Tags">
      <i class="el-icon-s-grid"></i>
    </router-link>
    <router-link :to="{name:'user_photo'}" tag="div" id="user-menu-item" des="Ablum">
      <i class="el-icon-picture"></i>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@media screen and (max-width: 800px) {
  #user_menu {
    position: absolute;
    right: 0;
  }
}
#user_menu {
  background-image: linear-gradient(-58deg, #e48b51, #6981d8);
  border-radius: 20px;
  margin: 10px;
  padding: 15px;
  color: rgb(255, 255, 255);
  #user-menu-item {
    position: relative;
    margin: 10px 0px;
    padding: 15px;
    cursor: pointer;
  }
  //   #user-menu-item:hover + #user-menu-item::before {
  //     display: inline-block;
  //     transition: 0.2s;
  //     transform: translate(-50px);
  //     opacity: 1;
  //   }
  #user-menu-item::before {
    content: attr(des);
    display: block;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    position: absolute;
    // opacity: 0;
    color: rgb(255, 255, 255);
    background-image: linear-gradient(-58deg, #6981d8, transparent);
    font-size: 0.6rem;
    top: -7px;
    left: 30px;
    border-radius: 20px;
  }
  @media screen and (max-width: 800px) {
    #user_menu {
      position: absolute;
      left: 0;
    }
    #user-menu-item::before {
      display: none;
    }
    #user-menu-item {
      padding: 0;
    }
  }
}
.router-link-exact-active {
  color: rgb(255, 200, 20);
}
</style>