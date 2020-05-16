<template>
  <div style="padding:10px">
    <div v-loading="load_essay">
      <article class="markdown-body" v-html="data.content" v-highlight></article>
    </div>
  </div>
</template>

<script>
import "github-markdown-css/github-markdown.css";
export default {
  name: "contentDetails",
  data() {
    return {
      data: {},
      load_essay: false
    };
  },
  methods: {
    async getEssayDetails(id) {
      this.load_essay = true;
      const essayDetails = await this.rq.fetchGet(
        this.apiUrl.essay + `/${id}`,
        {}
      );
      this.data = essayDetails;
      this.load_essay = false;
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
