<template>
  <div>
    <content-card :data="data" :pagination="pagination" @changPage="changPage"></content-card>
  </div>
</template>

<script>
export default {
  name: "blog-page",
  data() {
    return {
      data: [],
      pagination: {}
    };
  },
  methods: {
    async getUserBlogs(page = 1) {
      const bgRes = await this.rq.fetchGet(this.apiUrl.essay, { page });
      console.log(bgRes);
      this.data = bgRes.data;
      this.pagination = bgRes.meta.pagination;
    },
    changPage(val) {
      console.log(val);

      this.getUserBlogs(val);
    }
  },
  created() {
    this.getUserBlogs();
  }
};
</script>

<style lang="less" scoped>
</style>