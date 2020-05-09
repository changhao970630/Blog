<template>
  <div id="wrap">
    <el-tabs id="tabs" tabPosition="left" type="border-card">
      <el-tab-pane label="关于此网站">
        <span slot="label">
          <i class="el-icon-date"></i>
        </span>
        我的行程
      </el-tab-pane>
      <el-tab-pane label="功能">配置管理</el-tab-pane>
      <el-tab-pane label="技术栈">
        <div>
          <webTec></webTec>
        </div>
      </el-tab-pane>
      <el-tab-pane label="个人介绍">定时任务补偿</el-tab-pane>
    </el-tabs>
    <!-- <el-card style="margin:10px">
      <p>测试账户</p>
      <p>email:test@admin.com</p>
      <p>password:qwer1234</p>
    </el-card>-->
  </div>
</template>

<script>
import webTec from "./webTec";
export default {
  components: {
    webTec
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