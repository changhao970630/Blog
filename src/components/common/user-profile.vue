<template>
  <div id="userProfile">
    <div v-if="!userProfile">
      <el-button type="text" @click="goLogin">登录</el-button>
      <el-button type="text" @click="register">注册</el-button>
    </div>
    <div v-else>
      <img width="30px" height="30px" :src="userProfile.avatar" alt />
      <el-dropdown @command="handleCommand" trigger="click">
        <span class="el-dropdown-link" style="color: white;cursor: pointer">
          <span style="font-size: .8rem">{{userProfile.nickname}}</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="user_home">个人中心</el-dropdown-item>
          <el-dropdown-item command="login">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-profile",
  computed: {
    userProfile() {
      try {
        return this.$store.state.user.USER_INFO.id
          ? this.$store.state.user.USER_INFO
          : JSON.parse(localStorage.getItem("user_info"));
      } catch (e) {
        return false;
      }
    }
  },
  methods: {
    handleCommand(command) {
      this.$router.push({ name: command });
    },
    goLogin() {
      this.$router.push({ name: "login" });
    },
    register() {
      this.$message.info({
        message: "暂未开放注册！需要个人测试账号的请联系我！或者使用测试账号！",
        duration: 2000
      });
    }
  }
};
</script>

<style lang="less" scoped>
#userProfile {
  height: 3rem;
  color: #ffffff;

  img {
    vertical-align: middle;
    border-radius: 12px;
    border: 1px solid #ffffff;
    margin: 0px 20px;
  }
}

@media screen and (max-width: 800px) {
  #userProfile {
    position: absolute;
    transform: translateY(-3rem);
    opacity: 0;
  }
}
</style>
