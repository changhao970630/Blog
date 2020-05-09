<template>
  <div>
    <el-upload
      :show-file-list="false"
      class="upload-demo"
      :data="data"
      :action="imgAction"
      :on-success="uploadCoverSuccess"
      :on-error="uploadCoverError"
      name="file"
    >
      <div>
        <img width="150px" height="150px" :src="echoFileUrl" alt />
      </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: "chang_upload",
  props: {
    data: {
      type: Object,
      default() {
        return {
          sign: "default"
        };
      }
    },
    echoFileUrl: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      action: "http://localhost:3000/upload/image"
    };
  },
  computed: {
    imgAction() {
      return this.apiUrl.imageFile;
    }
  },
  methods: {
    uploadCoverSuccess(res) {
      console.log(res);
      this.$emit("uploadRes", res);
    },
    uploadCoverError(err) {
      console.log(err);
      this.$message.error("文件上传失败~~**~~");
    }
  }
};
</script>

<style lang="less" scoped>
.upload-demo {
  overflow: hidden;
  img {
    border: 1px solid darkcyan;
    border-radius: 50%;
  }
}
</style>