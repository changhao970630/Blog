<template>
  <div id="pagination">
    <el-card>
      <el-pagination
        small
        layout="total,prev, pager, next,jumper"
        :total="pagination.total"
        @current-change="handleChangPage"
      ></el-pagination>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "pagination",
  props: {
    pagination: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    handleChangPage(currentPage) {
      this.$emit("changPage", currentPage);
    }
  }
};
</script>