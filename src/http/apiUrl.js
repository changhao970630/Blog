// let host = "http://212.64.75.109/";
let host = "http://127.0.0.1:3000";

const apiUrl = {
  //登录！
  login: host + "/login",

  // 类型列表,类型添加
  types: "types",

  //文章列表，文章添加,文章详情
  essay: "essay",
  //所有用户公共文章！
  public_essaies: "/public/essays",
  //图片文件上传
  files: host + "upload_img",
};

export default apiUrl;
