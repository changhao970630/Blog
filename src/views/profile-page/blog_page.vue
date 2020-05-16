<template>
  <div>
    <div id="header">
      <div style="margin:10px 0px">
        <el-tag
          style="margin:2px;cursor:pointer"
          v-for="(item,index) in tags"
          :key="index"
          effect="dark"
          :type="(Math.random())*10>5?'primary':'success'"
          @click="typeEssay(item)"
        >{{item.typeName}}</el-tag>
      </div>
    </div>
    <content-card
      :data="data"
      :userEditable="userEditable"
      :pagination="pagination"
      @changPage="changPage"
      :load_data="load_data"
    ></content-card>
  </div>
</template>

<script>
export default {
  name: "blog-page",
  data() {
    return {
      data: [],
      pagination: {},
      userEditable: true,
      tags: [],
      load_data: false
    };
  },
  methods: {
    async getUserBlogs(page = 1, status = 1, type_id) {
      this.load_data = true;
      const bgRes = await this.rq.fetchGet(this.apiUrl.essay, {
        page,
        status,
        type_id: type_id ? type_id : null
      });
      this.data = bgRes.data;
      this.pagination = bgRes.meta.pagination;
      this.load_data = false;
    },
    async getUserTags(all = 1) {
      const tags = await this.rq.fetchGet(this.apiUrl.types, { all });
      this.tags = tags.data;
    },
    changPage(val) {
      this.getUserBlogs(val);
    },
    typeEssay(item) {
      this.getUserBlogs(1, 1, item.id);
    }
  },
  created() {
    this.getUserBlogs();
    this.getUserTags();
  }
};
</script>

<style lang="less" scoped>
#header {
}
</style>