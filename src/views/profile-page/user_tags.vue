<template>
  <div id="user_tags">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <h6>我的文章标签</h6>
      <el-button type="text" size="small" round @click="addTags">
        <i class="el-icon-plus"></i>
        <b>添加</b>
      </el-button>
    </div>
    <div id="tag-item" v-for="(item,index) in tags" :key="index">
      <h5>{{item.typeName}}</h5>
      <span>{{item.remark}}</span>
      <div id="action">
        <el-button size="mini" type="warning" circle @click="editTags(item)">
          <i class="el-icon-edit"></i>
        </el-button>
        <el-button
          size="mini"
          v-if="item.status !== 0"
          circle
          type="danger"
          @click="toogleTagStatus(item)"
        >
          <i class="el-icon-close"></i>
        </el-button>
        <el-button size="mini" v-else circle type="primary" @click="toogleTagStatus(item)">
          <i class="el-icon-check"></i>
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
      this.tags = tags.data;
      this.pagination = tags.meta.pagination;
    },
    toogleTagStatus(item) {
      this.c_confirm({
        props: { title: `确定${item.status == 1 ? "禁用" : "启用"}该标签吗？` }
      }).then(async () => {
        const deleeRes = await this.rq.fetchDelete(
          this.apiUrl.types + `/${item.id}`
        );
        if (deleeRes.id) {
          this.$message.success({
            message: `标签${item.status == 1 ? "禁用" : "启动"}成功！`,
            duration: 888
          });
          this.getUserTags(this.pagination.current_page);
        }
      });
    },
    addTags() {
      this.$router.push({ name: "user_add_tags" });
    },
    editTags(item) {
      // vm
      this.c_prompt({ props: { title: "请输入新的标签名称！" } }).then(
        async res => {
          const editRES = await this.rq.fetchPut(this.apiUrl.types, {
            id: item.id,
            typeName: res,
            remark: item.remark
          });
          console.log(editRES);
          if (editRES.id) {
            this.getUserTags(this.pagination.current_page);
          } else {
            this.$message.warning({
              message: editRES.message,
              duration: 900
            });
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
      width: 25%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
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
      width: 15%;
      min-width: 100px;
    }
  }
  #tag-item:hover {
    transform: scale(1.02);
  }
}
</style>