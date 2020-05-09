<template>
  <transition name="el-fade-in-linear" mode="out-in">
    <div class="c_confirm" v-show="visible">
      <c_modal @modalColse="modalColse"></c_modal>
      <div id="content">
        <header>
          <h6>
            <h2>
              {{title}}
              <i class="el-icon-question"></i>
            </h2>
          </h6>
          <div>
            <el-button type="text" @click="cancleMessage">
              <p style="color:white">取消</p>
            </el-button>
            <el-button type="text">
              <p style="color:white" @click="sureMessage">确定</p>
            </el-button>
          </div>
        </header>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "c_confirm",
  props: {
    title: {
      type: String,
      default: "确定继续操作？"
    }
  },
  data() {
    return {
      message: "", // 消息文字
      duration: 3000, // 显示时长，毫秒
      closed: false, // 用来判断消息框是否关闭
      timer: null, // 计时器
      visible: false // 是否显示
    };
  },
  mounted() {
    // this.startTimer();
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.destroyElement();
      }
    }
  },
  methods: {
    destroyElement() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    },
    startTimer() {
      this.timer = setTimeout(() => {
        if (!this.closed) {
          this.closed = true;
          clearTimeout(this.timer);
        }
      }, this.duration);
    },
    modalColse() {
      this.$el.parentNode.removeChild(this.$el);
    },
    sureMessage() {
      this.$el.parentNode.removeChild(this.$el);
      this.callback && this.callback("confirm");
    },
    cancleMessage() {
      this.$el.parentNode.removeChild(this.$el);
      this.callback && this.callback();
    }
  }
};
</script>

<style lang="less" scoped>
.c_confirm {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  #content {
    width: 20rem;
    background-color: rgb(42, 97, 176);
    height: 6rem;
    min-width: 200px;
    min-height: 100px;
    border-radius: 12px;
    position: absolute;
    z-index: 2;
    transition: 1s ease;
    overflow: hidden;
    box-shadow: 2px 2px 8px rgb(19, 1, 36);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    header {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: rgb(42, 97, 176);
      padding: 10px;
      div {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
  @media screen and (max-width: 600px) {
    #content {
      width: 80vw;
      height: 15vh;
    }
  }
}
</style>