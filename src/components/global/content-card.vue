<template>
  <div>
    <div>
      <el-card v-for="(item,index) in data" :key="index" style="padding: 10px 0px" shadow="hover">
        <div id="title">
          <h4 @click="toDetails(item)">{{item.title}}</h4>
          <div v-if="userEditable">
            <el-button size="mini" type="warning" circle @click="editEssay(item)">
              <i class="el-icon-edit"></i>
            </el-button>
            <el-button size="mini" circle type="danger" @click="toogleEssayStatus(item)">
              <i class="el-icon-delete"></i>
            </el-button>
          </div>
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
    </div>
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
    pagination: {},
    userEditable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    toDetails(item) {
      this.$router.push({ name: "details", params: { id: item.id } });
    },
    changPage(val = 1) {
      this.$emit("changPage", val);
    },
    toogleEssayStatus(item) {
      this.c_confirm({
        props: {
          title: "确定删除这篇文章嘛？"
        }
      })
        .then(async () => {
          const deleteRes = await this.rq.fetchDelete(
            this.apiUrl.essay + `/${item.id}`
          );
          console.log(deleteRes);
          if (deleteRes.id) {
            this.$emit("changPage", this.pagination.current_page);
            this.$message.success("删除成功！");
          }
        })
        .catch(() => {
          console.log(2);
        });
      console.log(item);
    },
    editEssay(item) {
      this.$router.push({ name: "edit", params: { id: item.id } });
    }
  }
};
</script>

<style lang="less" scoped>
#title {
  //标题
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    display: inline-block;
    cursor: pointer;
    width: 50%;
    overflow: hidden;
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
