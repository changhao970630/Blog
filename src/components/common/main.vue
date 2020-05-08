<template>
  <div style="width:100%;height:100%">
    <nav>
      <top_header></top_header>
    </nav>
    <content>
      <transition
        enter-active-class="animated rotateIn"
        leave-active-class="animated rotateOut"
        mode="out-in"
      >
        <modalMenu v-if="showSpanMenu"></modalMenu>
      </transition>
      <div id="container">
        <div id="left" class="aside"></div>
        <div id="middle" ref="middle">
          <transition mode="out-in">
            >
            <router-view></router-view>
          </transition>
        </div>
        <div id="right" class="aside"></div>
      </div>
    </content>
  </div>
</template>

<script>
import $bus from "../../tools/bus";
import top_header from "./top_header";
import modalMenu from "./modalMenu";
export default {
  data() {
    return {
      mode: "horizontal",
      showSpanMenu: false
    };
  },
  components: {
    top_header,
    modalMenu
  },
  computed: {
    current_path() {
      return this.$route.meta.title;
    }
  },
  //   mounted() {
  //     this.$refs.middle.addEventListener("scroll", e => {
  //       console.log(e.target.clientHeight);
  //       e.preventDefault();
  //       console.log(e.target.scrollTop);
  //     });
  //   },
  created() {
    $bus.$on("toogleMenuEmit", params => {
      this.showSpanMenu = params;
    });
  }
};
</script>

<style lang="less" scoped>
.v-enter-active,
.v-leave-active {
  //指就是html中fade名称
  transition: 0.5s ease;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
#container {
  width: 100%;
  height: calc(100% - 3rem);
  // background-image: url("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=108969226,324366578&fm=26&gp=0.jpg");
  // box-sizing: 100% 100%;
  /*background-color: rgb(72, 109, 255);*/
  //   background-color: rgb(115, 145, 202);
  display: flex;
  justify-content: center;

  #middle {
    width: 80%;
    overflow-y: scroll;
  }

  #middle::-webkit-scrollbar {
    width: 0;
  }
  /*#middle::-webkit-scrollbar-thumb {*/
  /*    background-color: #fffbbd;*/
  /*    border-radius: 15%;*/
  /*}*/
  .aside {
    width: 10%;
    text-align: center;
    transition: 0.26s ease-in-out;
  }

  @media screen and (max-width: 800px) {
    #middle {
      width: 100%;
    }
    .aside {
      width: 0;
      opacity: 0;
    }
  }
}
</style>
