<template>
  <div style="padding-bottom: 3rem">
    <el-card v-for="(item,index) in data" :key="index" style="padding: 10px 0px" shadow="hover">
      <div id="title">
        <h4 @click="toDetails(item)">{{item.title}}</h4>
      </div>
      <div id="user">
        <i class="el-icon-s-check"></i>
        <span>{{item.essay_user.nickname}}</span>
      </div>
      <div id="des">
        <p>{{item.remark}}</p>
      </div>
      <div id="more">
        <div id="tag">
          <el-tag
            effect="dark"
            :type="Math.random()*10>5?'primary':'danger'"
            size="mini"
          >{{item.essay_type.typeName}}</el-tag>
        </div>
        <h5 @click="toDetails(item)">ReadMore</h5>
      </div>
    </el-card>
    <pagination :pagination="pagination" @changPage="changPage"></pagination>
  </div>
</template>

<script>
export default {
  name: "contentCard",
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    pagination: {}
  },
  data() {
    return {};
  },
  methods: {
    toDetails(item) {
      this.$router.push({ name: "details", params: { id: item.id } });
    },
    changPage(val) {
      this.$emit("changPage", val);
    }
  }
};
</script>

<style lang="less" scoped>
#title {
  //标题
  h4 {
    display: inline-block;
    cursor: pointer;
  }
  h4:hover {
    color: #ffa422;
    text-decoration: underline;
  }
}
#user {
  color: deeppink;
  margin: 10px 0px;
}
#des {
  //简介
  p {
    font-size: 0.8rem;
    max-height: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}

#more {
  margin: 10px;
  h5 {
    background-color: #d1de69;
    display: inline-block;
    padding: 0.33rem;
    border-radius: 8%;
    cursor: pointer;
    transition: 0.3s;
    float: right;
  }
  #tag {
    float: left;
  }
  h5:hover {
    background-color: cadetblue;
    color: white;
  }
}
</style>
