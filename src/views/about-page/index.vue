<template>
  <div style="height:100%;text-align:left;">
    <el-card style="margin:10px">
      <p>测试账户</p>
      <p>email:test@admin.com</p>
      <p>password:qwer1234</p>
    </el-card>
    <div style="box-shadow:0px 0px 10px darkcyan;padding:20px">
      <h1 style="color:deeppink">About this website!</h1>
      <h3 style="color:darkcyan">前端</h3>
      <p>1.HTML5语义化标签,CSS3动画</p>
      <p>2.使用Vue全家桶</p>
      <p>3.Vue-cli 4.x 脚手架,webpack4.0配置基本项目开发环境</p>
      <h3 style="color:darkcyan">后端</h3>
      <p>1.本网站后端使用NodeJs Koa框架搭建网站服务器</p>
      <p>2.使用Mysql数据持久化</p>
      <p>3.ORM:Sequlize</p>
      <h3>开发进度</h3>
      <ul style="list-style:decimal;color:darkcyan;margin:20px">
        <h4>前端:</h4>
        <li>完成多用户的登录，公共发布文章查看区域</li>
        <li>完成当前用户的文章的增删改查！</li>
        <li>完成自定义confirm组件（extend API,promise）</li>
        <li>完成修改turnDown工具将html语句转为markdown</li>
      </ul>
      <ul style="list-style:decimal;color:darkcyan;margin:20px">
        <h4>后端:</h4>
        <li>完成多用户的登录,注册JWT返回token ，自定义auth中间件验证token并挂载到上下文</li>
        <li>完成用户文章的增删改查接口！用户操作权限验证！</li>
        <li>完成用户文章标签增删改查接口！用户操作权限验证！</li>
        <li>完成音频，图片，视频上传接口！</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>