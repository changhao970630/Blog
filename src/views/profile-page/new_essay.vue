<template>
  <div style="padding:20px">
    <div>
      <el-form label-position="top">
        <el-row>
          <el-col :xs="24" :sm="12" :md="8">
            <el-form-item label="文章标题">
              <el-input v-model="essay_info.title"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="12" :md="8">
            <el-form-item label="选择类型-若需要添加类型，请跳转到个人中心添加!-">
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
            <el-form-item label="简介">
              <el-input type="textarea" max="200" v-model="essay_info.remark"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="正文">
              <mavon-editor :toolbars="toolbars" @change="contentInput" v-model="temporary_value" />
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item>
              <el-button type="primary" @click="submitNewEssay">提交</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "newEassy",
  data() {
    return {
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
  methods: {
    async getUserTypes() {
      const userTypes = await this.rq.fetchGet(this.apiUrl.types, { all: 1 });
      console.log(userTypes);
      this.userTypes = userTypes.data;
    },
    contentInput(val, render) {
      this.essay_info.content = render;
    },
    async submitNewEssay() {
      this.essay_info.user_id = this.userProfile.id;
      const newEssayRes = await this.rq.fetchPost(
        this.apiUrl.essay,
        this.essay_info
      );
      if (newEssayRes.id) {
        this.$message.success("文章创建成功！");
      }
    }
  },
  created() {
    this.getUserTypes();
  }
};
</script>

<style lang="less" scoped>
</style>