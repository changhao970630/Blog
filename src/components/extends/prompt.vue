<template>
  <div id="prompt">
    <c_modal></c_modal>

    <div id="content">
      <div id="header" style="color:white">{{title}}</div>
      <div style="padding:10px">
        <el-input v-model="content"></el-input>
      </div>
      <div style="color:white;display:flex;justify-content:flex-end;font-size:0.8rem;">
        <p style="margin:10px" @click="cancleContent">取消</p>
        <p style="margin:10px" @click="sureContent">确定</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "c_prompt",
  props: {
    title: {
      type: String,
      default: "请输入提交的内容！"
    }
  },
  data() {
    return {
      content: ""
    };
  },
  methods: {
    cancleContent() {
      this.$el.parentNode.removeChild(this.$el);
    },
    sureContent() {
      this.callBack("confirm", this.content);
      this.$el.parentNode.removeChild(this.$el);
    }
  }
};
</script>

<style lang="less" scoped>
#prompt {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top: 0;
  left: 0;
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
    padding: 10px;
  }
  @media screen and (max-width: 600px) {
    #content {
      width: 80vw;
      height: 15vh;
    }
  }
}
</style>