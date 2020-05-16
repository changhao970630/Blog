<template>
  <div id="content">
    <div id="baseInfo">
      <h6>(此界面暂不适配移动端)</h6>
      <el-row>
        <el-form label-width="100px" label-position="right">
          <el-card>
            <el-card>
              <h2>个人简历</h2>
              <h5 style="text-align:center;padding:10px">基本信息</h5>
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-form-item label="姓名:">
                  <p>常昊</p>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-form-item label="性别:">
                  <p>男</p>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-form-item label="年龄:">
                  <p>22岁</p>
                </el-form-item>
              </el-col>
              <!-- <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-form-item label="学历:">
                  <p>专科</p>
                </el-form-item>
              </el-col>-->
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-form-item label="毕业:">
                  <p>2019年6月</p>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-form-item label="专业:">
                  <p style="color:red">
                    <b>计算机网络</b>
                  </p>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-form-item label="工作经验:">
                  <p>一年</p>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-form-item label="常驻:">
                  <p>广东省广州市</p>
                </el-form-item>
              </el-col>
              <!-- <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-form-item label="学历:">
                  <p>专科</p>
                </el-form-item>
              </el-col>-->
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-form-item label="手机:">
                  <p>15767876318</p>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-form-item label="邮箱:">
                  <p>1933310737@qq.com</p>
                </el-form-item>
              </el-col>
              <el-col>
                <el-form-item label="个人技能:">
                  <ul style="list-style:decimal;color:darkblue;margin:0px 20px">
                    <li>熟练使用HTML5,CSS3进行页面开发</li>
                    <li>熟练使用es6语法,es7语法糖</li>
                    <li>熟练使用Vue全家桶(Vuex/Vuerouter)进行项目的开发！</li>
                    <li>可以基于Vue封装一些常用的自定义组件，满足产品需求</li>
                    <li>熟练使用axios第三方库，二次封装axios，拦截器的使用,全局请求响应处理</li>
                    <li>熟练使用nodejs</li>
                    <li>使用过express_mongodb.Koa+mysql等框架进行一些接口的开发</li>
                    <li>熟悉webpack，可以手写一个Vue+webpack+css预处理器+eslint代码校验...的开发环境</li>
                    <li>熟悉git的常用命令</li>
                  </ul>
                </el-form-item>
              </el-col>
              <el-col>
                <el-form-item label="座右铭:">
                  <h3
                    style="color:darkcyan"
                  >Love what you do , do what you love !!! Keep Passion!!!爱你所做的，做你所爱的！保持激情！</h3>
                </el-form-item>
              </el-col>
            </el-card>
            <el-card>
              <h5 style="text-align:center;padding:10px">工作经历</h5>
              <el-form-item label="公司名称:">广州曼达德宇教育科技有限公司</el-form-item>
              <el-form-item label="工作时间:">2019-6月-至今</el-form-item>
              <el-form-item label="所在部门:">技术研发部</el-form-item>
              <el-form-item label="职位:">web前端开发工程师</el-form-item>
              <el-form-item label="工作职责:">
                <ul style="list-style:decimal;color:darkblue;margin:0px 20px">
                  <li>负责公司旧版灵动系统的维护！以及需求调研，新需求的开发！</li>
                  <li>独立对接后端开发出APP后台管理系统，用于公司APP产品的管理</li>
                  <li>负责新版灵动前端的开发,到目前为止主要功能已经全部完成！</li>
                  <li>负责收集产品反馈，并及时调整产品的优化！</li>
                  <li>不断学习新的知识，保证产品的质量！优化功能！</li>
                </ul>
              </el-form-item>
              <el-form-item label="项目介绍:">
                <h3 style="color:red">①-SK-APP后台ERP管理系统(独立完成)</h3>
                <el-row>
                  <el-col :sm="24">
                    <el-card>
                      <h5 style="color:blue">项目主要功能简介:</h5>
                      <ul style="list-style:decimal;color:#000066;margin:0px 20px">
                        <li>
                          对APP教学资源的管理
                          <ul style="margin:0px 20px">
                            <li>课本（点读课本，音频,视频课本，视频配音课本的增删改查）</li>
                            <li>试题试卷 七种题型的增删改查）</li>
                            <li>对APP中虚拟物品的增删改查</li>
                            <li>APP资源的发布管理，班级可访问教学资源权限的管理</li>
                          </ul>
                        </li>
                        <li>
                          对APP中虚拟教务的管理
                          <ul style="margin:0px 20px">
                            <li>APP中校区的权限管理</li>
                            <li>APP中老师对班级的权限管理</li>
                          </ul>
                        </li>
                        <li>
                          权限管理
                          <ul style="margin:0px 20px">
                            <li>根据用户不同的权限，访问菜单</li>
                          </ul>
                        </li>
                      </ul>
                    </el-card>
                  </el-col>
                  <el-col :sm="24">
                    <el-card>
                      <h5 style="color:blue">项目技术栈:</h5>
                      <ul style="list-style:decimal;color:#000066;margin:0px 20px">
                        <li>
                          使用
                          <b>Vue，Vue-cli，webpack</b> 搭建基础的项目环境
                        </li>
                        <li>
                          使用
                          <b>VueRouter</b>
                          根据路由进行不同的组件懒加载
                        </li>
                        <li>
                          使用
                          <b>Vuex</b>
                          进行全局数据状态的共享(登录状态，用户状态，组件状态)
                        </li>
                        <li>
                          使用
                          <b>Axios</b>
                          第三方库装对常用的请求方法，参数及拦截器进行二次封装，进行Http数据请求
                        </li>
                        <li>
                          使用
                          <b>IVIEW UI库</b>
                          完成页面布局和整个页面风格的统一，在IVEW-ADMIN的基础上开发
                        </li>
                        <li>
                          使用
                          <b>Webpack</b>
                          对生产环境下的打包项目做一点简单的优化
                        </li>
                        <li>
                          使用
                          <b>Webpack</b>
                          一些自动化的API加快开发效率例如require.context实现vue的自定义全局组件的自动化注册
                        </li>
                      </ul>
                    </el-card>
                  </el-col>
                </el-row>
                <h3 style="color:red">②-灵动企业后台管理系统(独立完成)</h3>
                <el-row>
                  <el-col :sm="24">
                    <el-card>
                      <h5 style="color:blue">项目主要功能简介:</h5>
                      <ul style="list-style:decimal;color:#000066;margin:0px 20px">
                        <li>
                          产品模块
                          <ul style="margin:0px 20px">
                            <li>对公司产品的增删改查</li>
                            <li>对公司产品对应优惠政策的管理</li>
                            <li>对不同校区价格表的录入管理</li>
                          </ul>
                        </li>
                        <li>
                          合同商城模块
                          <ul style="margin:0px 20px">
                            <li>针对学生选择当前校区已经生成的价格表中的产品生成订单合同</li>
                            <li>商城订单针对到单个产品，涉及到定金，余额，优惠券的使用</li>
                            <li>订单合同审核模块，校验订单是否有误！</li>
                          </ul>
                        </li>
                        <li>
                          人事模块
                          <ul style="margin:0px 20px">
                            <li>对所有的加盟校区，以及总部的各个部门员工人员的管理</li>
                            <li>员工信息的增删改查，统计！</li>
                            <li>对所有校区,班级，老师，学员的信息的管理！</li>
                            <li>对全体员工的权限分配</li>
                            <li>潜在学员用户的预约，到访，以及缴纳定金的管理</li>
                          </ul>
                        </li>
                        <li>
                          教务模块
                          <ul style="margin:0px 20px">
                            <li>校区的班级创建,排课的管理</li>
                            <li>班级的产品课程管理，课时划扣管理与统计</li>
                            <li>班级的老师，学员分配管理！</li>
                            <li>排课班级调班，学生或者老师请假管理！！</li>
                          </ul>
                        </li>
                        <li>
                          渠道模块
                          <ul style="margin:0px 20px">
                            <li>对公司拉到用户的方式进行管理统计分析市场行为！</li>
                          </ul>
                        </li>
                        <li>
                          权限模块
                          <ul style="margin:0px 20px">
                            <li>根据不同用户，鉴权,有访问不同页面，不同菜单的权限</li>
                            <li>最高级别的用户，可以分配其他用户的权限</li>
                          </ul>
                        </li>
                      </ul>
                    </el-card>
                  </el-col>
                  <el-col :sm="24">
                    <el-card>
                      <h5 style="color:blue">项目技术栈:</h5>
                      <ul style="list-style:decimal;color:#000066;margin:0px 20px">
                        <li>
                          使用
                          <b>Vue，Vue-cli，webpack</b> 搭建基础的项目环境
                        </li>
                        <li>
                          使用
                          <b>VueRouter</b>
                          根据路由进行不同的组件懒加载
                        </li>
                        <li>
                          使用
                          <b>Vuex</b>
                          进行全局数据状态的共享(登录状态，用户状态，组件状态)
                        </li>
                        <li>
                          使用
                          <b>Axios</b>
                          第三方库装对常用的请求方法，参数及拦截器进行二次封装，进行Http数据请求
                        </li>
                        <li>
                          <b>二次封装Element UI库</b>
                        </li>
                        <li>
                          使用
                          <b>Webpack</b>
                          对生产环境下的打包项目做一点简单的优化
                        </li>
                        <li>
                          使用
                          <b>Webpack</b>
                          一些自动化的API加快开发效率例如require.context实现vue的自定义全局组件的自动化注册
                        </li>
                      </ul>
                    </el-card>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-card>
          </el-card>
        </el-form>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#content {
  height: calc(100vh - 5rem);
  overflow: scroll;
  p {
    width: 100%;
    border-bottom: 1px solid darkcyan;
  }
  b {
    color: red;
  }
}
#content::-webkit-scrollbar {
  width: 2px;
}
#content::-webkit-scrollbar-thumb {
  background-image: linear-gradient(transparent, 50px, darkcyan, transparent);
}
</style>