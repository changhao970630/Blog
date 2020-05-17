<template>
  <div id="home">
    <div id="wrap">
      <el-card>
        <el-row>
          <el-col :xs="18" :sm="12" :md="8" :lg="6">
            <el-input v-model="searchTitle"></el-input>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" icon="el-icon-search" @click="filterTitle">检索</el-button>
          </el-col>
        </el-row>
      </el-card>
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
      load_data: false,
      searchTitle: ""
    };
  },
  methods: {
    async getPublicEssaies(page = 1, status = 1, title = "") {
      this.load_data = true;
      const publicEssaies = await this.rq.fetchGet(this.apiUrl.public_essaies, {
        page,
        status,
        title
      });
      this.data = publicEssaies.data;
      this.pagination = publicEssaies.meta.pagination;
      this.load_data = false;
    },
    filterTitle() {
      this.getPublicEssaies(1, 1, this.searchTitle);
    },
    changPage(val) {
      this.getPublicEssaies(val, 1, this.searchTitle);
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
