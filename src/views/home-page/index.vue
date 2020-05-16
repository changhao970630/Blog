<template>
  <div id="home">
    <div id="wrap">
      <content-card
        :data="data"
        :pagination="pagination"
        :load_data="load_data"
        @changPage="changPage"
      ></content-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "一个不知道放什么的首页",
      data: [],
      pagination: {},
      load_data: false
    };
  },
  methods: {
    async getPublicEssaies(page = 1, status = 1) {
      this.load_data = true;
      const publicEssaies = await this.rq.fetchGet(this.apiUrl.public_essaies, {
        page,
        status
      });
      this.data = publicEssaies.data;
      this.pagination = publicEssaies.meta.pagination;
      this.load_data = false;
    },
    changPage(val) {
      this.getPublicEssaies(val);
    }
  },
  created() {
    this.getPublicEssaies();
  }
};
</script>

<style lang="less" scoped>
#home {
  width: 100%;
  height: 100%;
}
</style>
