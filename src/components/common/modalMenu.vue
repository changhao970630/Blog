<template>
  <div id="modalMenu">
    <div id="userProfile">
      <div v-if="userProfile">
        <div id="avatar">
          <chang_upload :echoFileUrl="userProfile.avatar"></chang_upload>
        </div>
        <div style="text-align:center">
          <el-button type="text" @click="recently('profile')">个人中心</el-button>
          <el-button type="text" @click="recently('login')">退出登录</el-button>
        </div>
      </div>
      <div v-else>
        <el-button type="primary" @click="recently('login')">登录</el-button>
      </div>
    </div>

    <div id="common">
      <router-link
        tag="div"
        :to="{name:item.name}"
        class="menu-item"
        v-for="(item,index) in routes"
        :key="index"
      >{{item.title}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "modalMenu",
  data() {
    return {
      routes: [
        { name: "home", title: "最近文章" },
        { name: "contact", title: "联系我" },
        { name: "about", title: "关于" }
      ]
    };
  },
  methods: {
    recently(name) {
      this.$router.push({ name });
      this.$store.commit("toogleCollapse", false);
    }
  },
  computed: {
    userProfile() {
      try {
        return this.$store.state.user.USER_INFO.id
          ? this.$store.state.user.USER_INFO
          : JSON.parse(localStorage.getItem("user_info"));
      } catch (e) {
        console.log(e);
        return false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
#modalMenu {
  width: 80%;
  height: calc(100% - 3rem);
  box-shadow: 2px 2px 12px cadetblue;
  border-radius: 0 30px 30px 0;
  transition: 2s ease;
  background-image: linear-gradient(
    rgb(255, 255, 255),
    rgba(255, 255, 255, 0.95),
    rgb(255, 255, 255)
  );
  position: absolute;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  #userProfile {
    box-shadow: rgb(198, 226, 226) 2px 2px 12px;
    height: 50%;
    display: flex;
    justify-content: space-around;
    margin: 10px 0px;
    align-items: center;
    border-radius: 20px;
    margin: 20px;
    #avatar {
      border-radius: 50%;
      border: 2px solid white;
      animation: routing 6s linear infinite;
    }
    @keyframes routing {
      from {
        transform: rotateZ(0deg);
      }
      to {
        transform: rotateZ(360deg);
      }
    }
    span {
      font-size: 0.8rem;
      margin: 10px;
    }
  }
  #common {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50%;
    .menu-item {
      color: rgb(74, 27, 128);
      text-align: center;
      border-radius: 12px;
      margin: 2px 0px;
    }
    .router-link-exact-active,
    .router-link-active {
      color: rgb(231, 229, 229);
      background-color: rgb(22, 76, 121);
      width: 50%;
    }
  }
}
@media screen and (min-width: 480px) {
  #modalMenu {
    width: 38%;
  }
}
</style>
