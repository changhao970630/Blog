<template>
  <div id="user_tags">
    <h6>我的文章标签</h6>
    <div id="tag-item" v-for="(item,index) in tags" :key="index">
      <h5>{{item.typeName}}</h5>
      <span>{{item.remark}}</span>
      <div id="action">
        <el-button size="mini" type="warning" circle @click="editTags(item)">
          <i class="el-icon-edit"></i>
        </el-button>
        <el-button size="mini" circle type="danger" @click="toogleTagStatus(item)">
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
    async getUserTags(page = 1, status = 1) {
      const tags = await this.rq.fetchGet(this.apiUrl.types, { page, status });
      console.log(tags);
      this.tags = tags.data;
      this.pagination = tags.meta.pagination;
    },
    toogleTagStatus(item) {
      this.c_confirm({ props: { title: "确定删除该标签吗？" } }).then(
        async () => {
          const deleeRes = await this.rq.fetchDelete(
            this.apiUrl.types + `/${item.id}`
          );
          if (deleeRes.id) {
            this.$message.success("标签删除成功！");
            this.getUserTags(this.pagination.current_page);
          }
        }
      );
    },
    editTags(item) {
      // vm
      this.c_prompt({ props: { title: "请输入新的标签名称！" } }).then(
        async res => {
          console.log(res);
          console.log(item);
          const editRES = await this.rq.fetchPut(this.apiUrl.types, {
            id: item.id,
            typeName: res,
            remark: item.remark
          });
          console.log(editRES);
          if (editRES.id) {
            this.getUserTags(this.pagination.current_page);
          }
        }
      );
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
    padding: 16px;
    margin: 6px;
    border-radius: 18px;
    h5 {
      width: 30%;
    }
    span {
      font-size: 0.7rem;
      color: rosybrown;
      width: 40%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    #action {
      width: 30%;
      min-width: 100px;
    }
  }
  #tag-item:hover {
    transform: scale(1.02);
  }
}
</style>