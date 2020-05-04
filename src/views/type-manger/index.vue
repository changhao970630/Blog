<template>
  <div>
    <el-table :data="typesList" size="mini" border>
      <el-table-column label="类型名称" prop="typeName" align="center"></el-table-column>
      <el-table-column label="类型名称" align="center">
        <template slot-scope="props">
          <el-tag
            effect="dark"
            size="mini"
            :type="props.row.status==1?'primary':'danger'"
          >{{props.row.status==1?"正常":"失效"}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="备注" prop="remark" align="center"></el-table-column>
      <!-- <el-table-column label="创建日期" prop="createdAt" align="center"></el-table-column> -->
      <el-table-column label="操作" align="center">
        <div slot-scope="prop">
          <el-button type="warning" @click="editType(prop.row)" size="mini">修改</el-button>
          <el-button
            type="danger"
            @click="deleteType(prop.row)"
            size="mini"
            :disabled="prop.row.status!==1"
          >删除</el-button>
        </div>
      </el-table-column>
    </el-table>
    <pagination :pagination="pagination" @changPage="changPage"></pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typesList: [],
      pagination: {},
      editInfo: {}
    };
  },
  methods: {
    async getTypes(page) {
      let typeList = await this.rq.fetchGet(this.apiUrl.types, { page });
      console.log(typeList);
      this.typesList = typeList.data;
      this.pagination = typeList.meta.pagination;
    },
    editType(row) {
      console.log(row);
      this.$prompt("请输入修改后的名称！", "O(∩_∩)O~", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      }).then(async val => {
        const data = {
          id: row.id,
          typeName: val.value
        };
        const putRES = await this.rq.fetchPut(this.apiUrl.types, data);
        if (putRES.message) {
          this.$message.error(`修改失败！${putRES.message}`);
        } else {
          this.getTypes(this.pagination.current_page);
        }
      });
    },
    deleteType(row) {
      this.$confirm("确定删除这个类型吗", "确定继续", {
        type: "warning"
      }).then(async () => {
        await this.rq.fetchDelete(this.apiUrl.types + `/${row.id}`);
        this.$message.success("类型禁用成功！");
        this.getTypes(this.pagination.crrent_page);
      });
    },
    changPage(val) {
      this.getTypes(val);
    }
  },
  created() {
    this.getTypes(1);
  }
};
</script>

<style lang="scss" scoped>
</style>