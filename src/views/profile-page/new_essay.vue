<template>
  <div style="padding:20px;" v-if="reload">
    <div>
      <el-form label-position="top" :model="essay_info" :rules="rules" ref="essay_info">
        <el-row>
          <el-col :xs="24" :sm="12" :md="8">
            <el-form-item label="文章标题" prop="title">
              <el-input v-model="essay_info.title"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="12" :md="8">
            <el-form-item label="选择类型-若需要添加类型，请跳转到个人中心添加!-" prop="type_id">
              <el-select v-model="essay_info.type_id" style="width:100%">
                <el-option
                  v-for="(item,index) in userTypes"
                  :key="index"
                  :label="item.typeName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="简介" prop="remark">
              <el-input type="textarea" max="200" v-model="essay_info.remark"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="正文" prop="content">
              <mavon-editor
                :toolbars="toolbars"
                @change="contentInput"
                @imgAdd="imgAdd"
                v-model="temporary_value"
              />
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item>
              <div style="float:right">
                <el-button
                  type="danger"
                  @click="submitEditEssay('essay_info')"
                  v-if="$route.params.id"
                  size="mini"
                >确定修改</el-button>
                <el-button
                  type="primary"
                  @click="submitNewEssay('essay_info')"
                  v-else
                  size="mini"
                >提交</el-button>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TurndownService from "turndown";
export default {
  name: "newEassy",
  data() {
    return {
      reload: true,
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: false, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      },
      userTypes: [],
      temporary_value: "",
      essay_info: {
        title: "",
        remark: "",
        content: "",
        type_id: "",
        user_id: ""
      },
      rules: {
        title: [{ required: true, message: "请填写标题！" }],
        type_id: [{ required: true, message: "请填写文章类型！" }],
        remark: [{ required: true, message: "请填写简介！" }],
        content: [{ required: true, message: "请填写内容！" }]
      }
    };
  },
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
  watch: {
    $route() {
      location.reload();
    }
  },
  methods: {
    async getUserTypes() {
      const userTypes = await this.rq.fetchGet(this.apiUrl.types, { all: 1 });
      console.log(userTypes);
      this.userTypes = userTypes.data;
    },
    contentInput(val, render) {
      this.essay_info.content = render;
    },
    submitNewEssay(name) {
      this.$refs[name].validate(async done => {
        if (done) {
          this.essay_info.user_id = this.userProfile.id;
          const newEssayRes = await this.rq.fetchPost(
            this.apiUrl.essay,
            this.essay_info
          );
          if (newEssayRes.id) {
            this.$message.success("文章创建成功！");
          }
        }
      });
    },
    async submitEditEssay() {
      console.log(this.essay_info);
      const editInfo = {
        id: this.essay_info.id,
        title: this.essay_info.title,
        remark: this.essay_info.remark,
        type_id: this.essay_info.type_id,
        content: this.essay_info.content
      };
      const editRes = await this.rq.fetchPut(this.apiUrl.essay, editInfo);
      console.log(editRes);
      if (editRes.id) {
        this.$message.success("修改成功");
        this.$router.go(-1);
      }
    },
    getBlobBydataURI(urlData) {
      const bytes = window.atob(urlData.split(",")[1]); //去掉url的头，并转换为byte

      //处理异常,将ascii码小于0的转换为大于0
      const ab = new ArrayBuffer(bytes.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
      }
      return new Blob([ab], { type: "image/png" });
    },
    async imgAdd(pos, file) {
      // console.log(pos);
      // let form = new FormData();
      // const blobData = this.getBlobBydataURI(file.miniurl);
      // let fileOfBlob = new File([blobData], file.name + ".jpg"); // 重命名了
      // console.log(fileOfBlob);
      // form.append("file", fileOfBlob);
      // const d = await this.rq.fetchUpload(this.apiUrl.imageFile, {
      //   file: form
      // });
      // console.log(d);
      let formdata = new FormData();
      formdata.append("imgFile", file);
      axios({
        method: "post",
        url: this.apiUrl.imageFile,
        data: {
          file: formdata
        },
        timeout: 10000
      }).then(response => {
        console.log(response);
      });
    },
    async getEssayDetails(id) {
      const res = await this.rq.fetchGet(this.apiUrl.essay + `/${id}`, {});
      console.log(res);
      const turndownService = new TurndownService();
      const markdown = turndownService.turndown(res.content);
      this.essay_info = res;
      this.temporary_value = markdown;
    }
  },
  created() {
    this.getUserTypes();
    if (this.$route.params.id) {
      console.log(this.$route.params.id);
      this.getEssayDetails(this.$route.params.id);
    }
  }
};
</script>

<style lang="less" scoped>
</style>