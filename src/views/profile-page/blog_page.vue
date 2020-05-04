<template>
  <div>
    <content-card :data="data"></content-card>
  </div>
</template>

<script>
export default {
  name: "blog-page",
  data() {
    return {
      data: []
    };
  },
  methods: {
    async getUserBlogs() {
      const bgRes = await this.rq.fetchGet(this.apiUrl.essay, {});
      console.log(bgRes);
      this.data = bgRes.data;
    }
  },
  created() {
    this.getUserBlogs();
  }
};
</script>

<style lang="less" scoped>
</style>