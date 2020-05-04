<template>
  <div id="add_artical">
    <el-card>
      <el-steps :active="current_step" simple>
        <el-step title="标题" icon="el-icon-setting"></el-step>
        <el-step title="类型" icon="el-icon-setting"></el-step>
        <el-step title="上传封面" icon="el-icon-upload"></el-step>
        <el-step title="正文show" icon="el-icon-edit"></el-step>
      </el-steps>
    </el-card>
    <div class="card_content">
      <el-card class="card">
        <div>
          <el-row>
            <el-form
              ref="arical_info"
              :model="arical_info"
              :rules="rules"
              label-position="left"
              label-width="80px"
            >
              <el-col v-if="current_step==1">
                <el-form-item label="标题" prop="title">
                  <el-input v-model="arical_info.title"></el-input>
                </el-form-item>
                <el-form-item label="简介" prop="describe">
                  <el-input type="textarea" v-model="arical_info.describe"></el-input>
                </el-form-item>
              </el-col>
              <el-col v-if="current_step==2">
                <el-form-item label="类型" prop="c_id">
                  <el-select v-model="arical_info.c_id" clearable style="width:100%">
                    <el-option
                      v-for="(item,index) in typesList"
                      :key="index"
                      :value="item._id"
                      :label="item.typeName"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col v-if="current_step==3">
                <el-form-item label="上传封面" prop="cover_img">
                  <div v-if="arical_info.cover_img" id="cover_preview">
                    <img :src="arical_info.cover_img" alt id="img" />
                    <div class="modal">
                      <i class="el-icon-delete btn" @click="RemoveCover"></i>
                    </div>
                  </div>
                  <chang_upload @uploadRes="uploadRes" v-else></chang_upload>
                </el-form-item>
              </el-col>
              <el-col v-if="current_step==4">
                <el-form-item label="正文" prop="content">
                  <mavon-editor v-model="arical_info.content" @change="inputContent" />
                </el-form-item>
                <p v-html="arical_info.content"></p>
              </el-col>
            </el-form>
          </el-row>
        </div>
        <div style="overflow:hidden">
          <el-button
            style="float:right"
            type="primary"
            size="mini"
            @click="next('arical_info')"
            icon="el-icon-d-arrow-right"
          >{{current_step==4?'提交':""}}</el-button>
          <el-button
            style="float:left"
            v-if="current_step !==1"
            size="mini"
            type="primary"
            @click="last"
            icon="el-icon-arrow-left"
          ></el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      current_step: 1,
      defaultData: "preview",
      cover_preview: "",
      rules: {
        title: [{ required: true, message: "请填写标题!" }],
        describe: [{ required: true, message: "请填写简介!" }],
        c_id: [{ required: true, message: "请选择类型!" }],
        cover_img: [{ required: true, message: "请上传封面！!" }],
        content: [{ required: true, message: "请填写正文!" }]
      },
      typesList: [],
      arical_info: {
        title: "",
        describe: "",
        cover_img: "",
        content: "",
        c_id: ""
      }
    };
  },
  methods: {
    next(name) {
      this.$refs[name].validate(async done => {
        if (done) {
          if (this.current_step < 4) {
            this.current_step++;
          } else {
            let addRes = await this.rq.fetchPost(
              this.apiUrl.artical,
              this.arical_info
            );
            console.log(addRes);
            if (addRes.data.title) {
              this.$message.success("创建成功！");
            } else {
              this.$message.error(`创建失败${addRes.error}`);
            }
          }
        }
      });
    },
    last() {
      if (this.current_step > 1) {
        this.current_step--;
      } else {
        this.$message.info("第一步了喔！");
      }
    },
    async getTypes() {
      const typeList = await this.rq.fetchGet(this.apiUrl.types, {
        all: 1
      });
      this.typesList = typeList.data;
    },
    uploadRes(res) {
      console.log(res.filepath);
      this.arical_info.cover_img = res.filepath;
    },
    RemoveCover() {
      this.arical_info.cover_img = "";
    },
    inputContent(val) {
      console.log(val);
    }
  },
  created() {
    this.getTypes();
  }
};
</script>

<style lang="less" scoped>
.card_content {
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    min-width: 500px;
    margin: 66px 0px;
    #cover_preview {
      #img {
        box-shadow: 2px 2px 12px rgb(58, 52, 51);
        border-radius: 12px;
        width: 300px;
        height: 300px;
        position: relative;
      }
      .modal {
        position: absolute;
        width: 300px;
        height: 300px;
        border-radius: 12px;
        background-color: rgba(29, 6, 4, 0.329);
        z-index: 1;
        top: 0;
        left: 0;
        display: none;
        .btn {
          font-size: 2rem;
          color: cyan;
        }
      }
      #img:hover + .modal {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>