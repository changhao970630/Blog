<template>
  <div id="wrap">
    <div id="content" style>
       <h1 style="color:deeppink">About this website!</h1>
       <h4>开发进度</h4>
      <ul style="list-style:decimal;color:darkcyan;margin:20px">
        <h4>前端:</h4>
        <li>完成多用户的登录，公共发布文章查看区域</li>
        <li>完成当前用户的添加，修改，删除，查看文章，只有当用户登录了才能添加，删除用户自己的文章</li>
        <li>
          完成自定义confirm组件（
          <b>extend API,promise</b> ）
          <b>样式待优化</b>
        </li>
        <li>完成修改turnDown工具将html语句转为markdown</li>
        <li>
          完成用户头像的修改，但是因为接口设计原因，没有办法从数据接口角度重新渲染，
          现在使用
          <b>location API</b> 结合
          <b>本地存储localstorage</b> 强制刷新
          <b>待优化优化</b>
        </li>
        <li>完成用户根据自己的标签访问自己的属于这个标签的所有文章！</li>
      </ul>
      <ul style="list-style:decimal;color:darkcyan;margin:20px">
        <h4>后端:</h4>
  
        <li>Koa-bodyParse完成请求体数据捷信</li>
        <li>
          完成多用户的登录,注册，及用户更新基础信息接口,登录的时候使用JWT
          <b>(json web token )</b> 返回token 
        </li>
        <li>自定义auth中间件验证token并挂载到上下文</li>
        <li>完成用户文章的增删改查接口！用户操作权限验证！</li>
        <li>完成用户文章标签增删改查接口！用户操作权限验证！</li>
        <li>完成音频，图片，视频上传接口！</li>
      </ul>
     
      <h4>技术栈</h4>
      <h4 style="color:darkcyan">前端</h4>
      <p>
        1.
        <b>HTML5</b> 语义化标签,
        <b>CSS3</b>
        动画
      </p>
      <p>
        <ul>
            2.<b>Vue全家桶</b>
            <li style="margin:0px 30px;color:darkred">Vuex数据状态管理 VueRouter Axios</li>
            <li style="margin:0px 30px;color:darkred">VueRouter,组件渲染，路由守卫控制权限</li>
            <li style="margin:0px 30px;color:darkred">使用Axios进行Http服务器数据交互</li>
        </ul>
      </p>
      <p>3.Vue-cli 4.x 脚手架,webpack4.0配置基本项目开发环境</p>
          <hr/>

      <h4 style="color:darkcyan">后端</h4>

      <p>1.本网站后端使用NodeJs Koa框架搭建网站服务器</p>
      <p>2.使用Mysql数据持久化</p>
      <p>3.ORM:Sequlize</p>
                  <hr>
      <div>
      <p>
        这是一个
        <b>多用户</b>的动态博客系统！
      </p>
    </div>
    <ul>
      <li>用户注册登录后,可以创建自己 <b>文章的标签分类</b>，</li>
      <li>可以<b>添加,查看，修改，删除</b>属于用户自己的文章！</li>
      <li>可以<b>添加,查看，修改，删除</b>属于用户自己的标签类型！</li>
      <li>用户可以修改头像！那些其他个人信息的修改后端接口已经完成！前端还没有放出！</li>
      <li>所有的数据删除都是改变状态不会做真正的删除，便于失误操作数据找回！</li>
      <li>因为本着想自己使用的目的，以后会继续完善！仅仅是自己学习使用！</li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#wrap {
  #content {
    height: calc(100vh - 5rem);
    overflow: scroll;
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
}
</style>