<template>
  <div id="user-profile">
    <div id="wrap">
      <div id="base-info">
        <!-- <el-button @click="editTest">修改测试</el-button> -->
        <div id="setting" @click="goSetting">
          <i class="el-icon-setting"></i>
        </div>
        <!-- <img id="avatar" :src="userInfo.avatar" alt width="100" height="100" /> -->
        <div id="avatar">
          <chang_upload :echoFileUrl="userInfo.avatar" @uploadRes="uploadRes" width="130px"></chang_upload>
        </div>
        <h3 id="nickname">{{userInfo.nickname}}</h3>
        <h4 id="email">{{userInfo.email}}</h4>
        <h6>享受生活，珍惜时间！</h6>
        <!-- <tags></tags> -->
        <div id="time">{{current_time}}</div>
      </div>
      <div id="user-content">
        <transition
          mode="out-in"
          enter-active-class="animated flipInY"
          leave-active-class="animated flipOutY"
        >
          <router-view></router-view>
        </transition>
      </div>
      <div>
        <user_menu></user_menu>
      </div>
    </div>
  </div>
</template>

<script>
// import tags from "./components/tags";
import user_menu from "./components/user_menu";
export default {
  name: "user-profile",
  data() {
    return {
      current_time: this.formateDT(new Date())
    };
  },
  components: {
    user_menu
    // tags
  },
  computed: {
    userInfo() {
      const d = this.$store.state.user.USER_INFO.id
        ? this.$store.state.user.USER_INFO
        : JSON.parse(localStorage.getItem("user_info"));
      return d;
    }
  },
  methods: {
    formateDT(date) {
      //格式化日期
      let d = new Date(date);
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      let hour = d.getHours();
      let min = d.getMinutes();
      let sec = d.getSeconds();
      return `${year}-${month >= 10 ? month : `0${month}`}-${
        day >= 10 ? day : `0${day}`
      } ${hour >= 10 ? hour : `0${hour}`}:${min >= 10 ? min : `0${min}`}:${
        sec >= 10 ? sec : `0${sec}`
      }`;
    },
    goSetting() {
      this.$router.push({ name: "setting" });
    },
    getTime() {
      const timer = setInterval(() => {
        // 某些定时器操作
        this.current_time = this.formateDT(new Date());
      }, 1000);
      // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
      this.$once("hook:beforeDestroy", () => {
        clearInterval(timer);
      });
    },
    editTest() {},
    async uploadRes(res) {
      const newAvatar =
        process.env.NODE_ENV == "development"
          ? res.filepath_local
          : res.filepath_online;
      console.log(newAvatar);
      const updateProfile = await this.rq.fetchPut(
        this.apiUrl.user_base_profile,
        {
          id: this.userInfo.id,
          avatar: newAvatar,
          nickname: this.userInfo.nickname
        }
      );
      console.log(updateProfile);
      if (updateProfile.id) {
        let t = JSON.parse(localStorage.getItem("user_info"));
        t.avatar = newAvatar;
        localStorage.setItem("user_info", JSON.stringify(t));
        location.reload();
        this.$message.success("更换头像成功！");
      }
    }
  },
  created() {
    this.getTime();
  }
};
</script>

<style lang='less' scoped>
#user-profile,
#wrap {
  width: 100%;
  height: 100%;
  #wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    #base-info,
    #user-content {
      width: 62%;
      height: 90%;
      display: flex;
      transition: 0.66s ease;
      flex-direction: column;
      box-shadow: -0px -0px 13px rgb(234, 232, 238);
    }

    #base-info {
      width: 28%;
      height: calc(100% - 3rem);
      border-radius: 18px 0px 0px 18px;
      background-image: linear-gradient(129deg, rgb(57, 13, 98), #caa1a1);
      text-align: center;
      color: white;
      justify-content: center;
      align-items: center;
      margin: 3px 0px;
      position: relative;
      #setting {
        display: inline-block;
        text-align: center;
        font-size: 1.8rem;
        position: absolute;
        top: 10px;
        left: 10px;
        cursor: pointer;
        transition: 0.8s ease;
        animation: route 6s ease infinite;
        border-radius: 50%;
      }
      #setting:hover {
        animation-duration: 2s;
        box-shadow: inset 2px 2px 10px rgb(227, 106, 106);
      }
      @keyframes route {
        from {
          transform: rotateZ(0deg);
        }
        to {
          transform: rotateZ(360deg);
        }
      }
      #avatar {
        border-radius: 50%;
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
      #nickname {
        margin: 10px 0px;
      }
      #time {
        position: absolute;
        bottom: 8.8px;
      }
    }
    #user-content {
      background-color: #ffffff;
      padding: 30px;
      box-sizing: border-box;
      border-radius: 0px 30px 30px 0px;
      height: calc(100% - 3rem);
      overflow-y: scroll;
    }
    #user-content::-webkit-scrollbar {
      width: 6px;
    }
    #user-content::-webkit-scrollbar-thumb {
      background-image: linear-gradient(
        to bottom,
        transparent,
        rgb(215, 202, 61),
        transparent
      );
    }
    @media screen and (max-width: 800px) {
      #base-info {
        opacity: 0;
        width: 0;
      }
      #user-content {
        border-radius: 30px;
        width: 88%;
      }
    }
  }
}
</style>
