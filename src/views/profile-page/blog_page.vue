<template>
  <div>
    <div id="header">
      <p>我近期发表的文章</p>
    </div>
    <content-card
      :data="data"
      :userEditable="userEditable"
      :pagination="pagination"
      @changPage="changPage"
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
      userEditable: true
    };
  },
  methods: {
    async getUserBlogs(page = 1, status = 1) {
      const bgRes = await this.rq.fetchGet(this.apiUrl.essay, { page, status });
      this.data = bgRes.data;
      this.pagination = bgRes.meta.pagination;
    },
    changPage(val) {
      this.getUserBlogs(val);
    }
  },
  created() {
    this.getUserBlogs();
  }
};
</script>

<style lang="less" scoped>
#header {
}
</style>