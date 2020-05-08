<template>
  <div id="user_tags">
    <h6>我的文章标签</h6>
    <div id="tag-item" v-for="(item,index) in tags" :key="index" @click="tagsActions(item)">
      <h5>{{item.typeName}}</h5>
      <div>
        <el-button size="mini" type="warning" circle>
          <i class="el-icon-edit"></i>
        </el-button>
        <el-button size="mini" circle type="danger">
          <i class="el-icon-delete"></i>
        </el-button>
      </div>
    </div>
    <div id="pagination">
      <pagination :pagination="pagination"></pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "user_tags",
  data() {
    return {
      tags: [],
      pagination: {}
    };
  },
  methods: {
    async getUserTags(page = 1) {
      const tags = await this.rq.fetchGet(this.apiUrl.types, { page });
      console.log(tags);
      this.tags = tags.data;
      this.pagination = tags.meta.pagination;
    },
    tagsActions(item) {
      console.log(item);
    }
  },
  created() {
    this.getUserTags();
  }
};
</script>

<style lang="less" scoped>
#user_tags {
  width: 100%;
  height: 100%;
  position: relative;
  #tag-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: 0.6s;
    box-shadow: 0px 0px 8px gray;
    padding: 6px;
    margin: 6px;
    border-radius: 25px;
  }
  #tag-item:hover {
    transform: scale(1.02);
  }
}
</style>