<template>
  <div id="tag">
    <el-tag
      id="tag-item"
      v-for="(item,index) in tags"
      :type="Math.random()*10>5?'warning':'primary'"
      :key="index"
      effect="dark"
      size="mini"
    >
      <h6>{{item.typeName}}</h6>
    </el-tag>
  </div>
</template>

<script>
export default {
  name: "tags",
  data() {
    return {
      tags: [],
      types: [],
      type: ""
    };
  },
  methods: {
    async getUserTags(all = 1) {
      const tags = await this.rq.fetchGet(this.apiUrl.types, { all });
      console.log(tags);
      this.tags = tags.data;
    },
    randowType() {
      console.log(Math.floor(Math.random() * 10));
    }
  },
  created() {
    this.getUserTags();
    this.randowType();
  }
};
</script>

<style lang="less" scoped>
#tag {
  padding: 10px;
  #tag-item {
    cursor: pointer;
    margin: 2px;
    transition: 0.3s;
  }
  #tag-item:hover {
    transform: scale(1.1);
  }
}
</style>