<template>
  <div style="padding:10px">
    <!-- <el-button type="text">
      <h4>A</h4>
    </el-button>
    <el-button type="text">
      <h2>A</h2>
    </el-button>
    <el-button type="text">
      <h1>A</h1>
    </el-button>
    <h2 v-html="data.title"></h2>
    <div></div>-->
    <article class="markdown-body" v-html="data.content" v-highlight></article>
  </div>
</template>

<script>
import "github-markdown-css/github-markdown.css";
export default {
  name: "contentDetails",
  data() {
    return {
      data: {}
    };
  },
  methods: {
    async getEssayDetails(id) {
      const essayDetails = await this.rq.fetchGet(
        this.apiUrl.essay + `/${id}`,
        {}
      );
      this.data = essayDetails;
    }
  },
  created() {
    console.log(this.$route.params.id);
    this.getEssayDetails(this.$route.params.id);
  }
};
</script>

<style lang='less' scoped>
.markdown-body {
  font-size: 1.1rem;
  .xquery {
    background-color: darkcyan !important;
  }
}
</style>
