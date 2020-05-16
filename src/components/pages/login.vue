<template>
  <div id="login-form">
    <div id="login">
      <el-card style="border-radius: 20px;box-shadow: 2px 2px 22px #ffffff">
        <el-row>
          <h4>
            <span v-for="(item,index) in title" :key="index">{{item}}</span>
          </h4>
          <el-form label-width="70px" :model="login_info" ref="login_info" :rules="rules">
            <el-col>
              <el-form-item label="邮箱：" prop="email">
                <el-input v-model="login_info.email"></el-input>
              </el-form-item>
            </el-col>
            <el-col>
              <el-form-item label="密码：" prop="password">
                <el-input v-model="login_info.password" type="password"></el-input>
              </el-form-item>
            </el-col>
            <el-col>
              <el-form-item>
                <el-button type="danger" @click="login('login_info')" size="mini">登录</el-button>
              </el-form-item>
            </el-col>
          </el-form>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
import { login } from "../../tools/common";
import { mapActions } from "vuex";

export default {
  name: "login",
  data() {
    console.log(process.env.NODE_ENV);
    // const testUser = {
    //   email: "ch@admin.com",
    //   password: "1"
    // };
    const onlineUser = {
      email: "test@admin.com",
      password: "qwer1234"
    };
    // const user = process.env.NODE_ENV == "development" ? testUser : onlineUser;
    const user = onlineUser;
    return {
      title: "CODE HAPPIER BLOG OS",
      login_info: user,
      rules: {
        email: [{ required: true, message: "请输入邮箱地址！" }],
        password: [{ required: true, message: "请输入密码！" }]
      }
    };
  },
  methods: {
    ...mapActions(["handleSaveUserInfo", "handleDeleteUserInfo"]),
    login(name) {
      this.$refs[name].validate(async done => {
        if (done) {
          let loginres = await login(this.login_info);
          if (!loginres.data.token) {
            this.$message.error("邮箱或密码错误！");
          } else {
            this.$message({
              message: "登录成功^_^!",
              type: "success",
              showClose: true
            });
            this.handleSaveUserInfo(loginres.data);
            this.$router.push("/");
          }
        } else {
          this.$message.error("登录信息填写不完整！");
        }
      });
    }
  },
  created() {
    this.handleDeleteUserInfo({});
  }
};
</script>

<style lang="less" scoped>
#login-form {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  #login {
    transition: 0.7s ease;
    width: 40%;
    box-shadow: 3px 3px 13px rgb(51, 30, 124);
    border-radius: 16px;
    h4 {
      text-align: center;
      padding: 20px 0px;
    }
  }
  @media screen and (max-width: 560px) {
    #login {
      width: 85%;
    }
  }
}
</style>
