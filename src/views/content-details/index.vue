<template>
  <div style="padding:10px">
    <h2 v-html="data.title"></h2>
    <div></div>
    <article class="markdown-body" style="text-align:left" v-html="data.content"></article>
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

<style scoped>
</style>
