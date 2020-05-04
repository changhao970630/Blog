<template>
  <div>
    <el-card>
      <el-form label-width="70px">
        <el-row>
          <el-col :xs="24" :sm="12" :md="8" :lg="6">
            <el-form-item label="类型" prop="c_id">
              <el-select v-model="c_id" clearable style="width:100%">
                <el-option
                  v-for="(item,index) in typesList"
                  :key="index"
                  :value="item._id"
                  :label="item.typeName"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6">
            <el-form-item label="类型" prop="c_id">
              <el-button type="primary" @click="filterAritcal">检索</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card>
      <el-table :data="table_data" v-loading="load_data">
        <el-table-column label="文章标题" prop="title" min-width="80px"></el-table-column>
        <el-table-column label="状态" prop="status" align="center"></el-table-column>
        <el-table-column label="封面">
          <div slot-scope="prop">
            <img :src="prop.row.cover_img" width="60px" height="60px" alt />
          </div>
        </el-table-column>
        <el-table-column label="创建时间" prop="create_date" align="center" min-width="80px"></el-table-column>
        <el-table-column label="操作" align="center" min-width="100px">
          <div slot-scope="prop">
            <el-row>
              <el-col :xs="24" :sm="24" :md="8" :lg="6">
                <el-button type="primary" @click="editArtical(prop.row)">预览</el-button>
              </el-col>
              <el-col :xs="24" :sm="24" :md="8" :lg="6">
                <el-button type="warning" @click="editArtical(prop.row)">修改</el-button>
              </el-col>
              <el-col :xs="24" :sm="24" :md="8" :lg="6">
                <el-button type="danger" @click="editArtical(prop.row)">删除</el-button>
              </el-col>
            </el-row>
          </div>
        </el-table-column>
      </el-table>
      <pagination :pagination="pagination" @changPage="changPage"></pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "artical",
  data() {
    return {
      table_data: [],
      pagination: {},
      load_data: false,
      typesList: [],
      c_id: "",
      status: 1
    };
  },
  methods: {
    async getAllArtical(page = 1, status, c_id) {
      this.load_data = true;
      let listData = await this.rq.fetchGet(this.apiUrl.essay, {
        page,
        status: status ? status : null,
        c_id: c_id ? c_id : null
      });
      console.log(listData);
      this.table_data = listData.data;
      this.pagination = listData.meta.pagination;
      this.load_data = false;
    },
    editArtical(row) {
      console.log(row);
    },
    changPage(val) {
      this.getAllArtical(val);
    },
    filterAritcal() {
      this.getAllArtical(1, this.status, this.c_id);
    },
    async getTypes() {
      let typeList = await this.rq.fetchGet(this.apiUrl.types, {});
      console.log(typeList.data);
      this.typesList = typeList.data;
    }
  },
  created() {
    this.getAllArtical();
    this.getTypes();
  }
};
</script>

<style lang="scss" scoped>
</style>