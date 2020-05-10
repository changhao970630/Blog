<template>
  <div style="width:100%;height:100%;display:flex;justify-content:center;align-item:center">
    <el-form
      label-position="top"
      style="width:80%"
      :model="type_info"
      ref="type_info"
      :rules="rules"
    >
      <el-form-item label="类型名称:" prop="typeName">
        <el-input v-model="type_info.typeName"></el-input>
      </el-form-item>
      <el-form-item label="类型描述:" prop="remark">
        <el-input type="textarea" v-model="type_info.remark"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini" @click="handleSubmit('type_info')">确定创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type_info: {
        typeName: "",
        remark: ""
      },
      rules: {
        typeName: [{ required: true, message: "标签名称必填！" }],
        remark: [{ required: true, message: "标签描述必填！" }]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(async done => {
        if (done) {
          console.log(this.type_info);
          const newTagRes = await this.rq.fetchPost(
            this.apiUrl.types,
            this.type_info
          );
          console.log(newTagRes);
          if (newTagRes == "") {
            this.$message.success("类型创建成功！");
            this.$router.go(-1);
          } else {
            this.$message.info(`添加失败${newTagRes.message}`);
          }
        } else {
          this.$message.info("填写不完整！");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>