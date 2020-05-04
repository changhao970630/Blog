<template>
  <div>
    <el-upload
      :show-file-list="false"
      class="upload-demo"
      :data="data"
      drag
      :action="apiUrl.files"
      :on-success="uploadCoverSuccess"
      :on-error="uploadCoverError"
    >
      <div>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
      </div>
    </el-upload>
  </div>
</template>

<script>
import apiUrl from "../../http/apiUrl";
export default {
  name: "chang_upload",
  props: {
    data: {
      type: Object,
      default() {
        return {
          sign: "default",
          apiUrl: apiUrl
        };
      }
    }
  },
  methods: {
    uploadCoverSuccess(res) {
      this.$emit("uploadRes", res);
    },
    uploadCoverError(err) {
      console.log(err);
      this.$message.error("文件上传失败~~**~~");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>