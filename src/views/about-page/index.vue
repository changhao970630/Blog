<template>
  <div id="wrap">
    <el-tabs id="tabs" tabPosition="left" type="border-card">
      <el-tab-pane label="个人简历">
        <selfIntroduce></selfIntroduce>
      </el-tab-pane>
      <el-tab-pane label="关于网站">
        <div>
          <webTec></webTec>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import webTec from "./webTec";
import selfIntroduce from "./selfIntroduce";
export default {
  components: {
    webTec,
    selfIntroduce
  }
};
</script>

<style lang="less" scoped>
#wrap {
  height: calc(100% - 1rem);
  margin: 10px;
  #tabs {
    height: 100%;
  }
}
</style>