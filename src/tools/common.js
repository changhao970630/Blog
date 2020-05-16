import Cookie from "js-cookie";
import axios from "axios";
import { Message } from "element-ui";
import apiUrl from "../http/apiUrl";
import store from "../store";
export const getToken = () => {
  //获取token
  return Cookie.get("token") || store.state.user.USER_INFO.token || false;
};
export const login = async ({ email, password }) => {
  try {
    let loginRes = await axios({
      url: apiUrl.login,
      method: "post",
      data: {
        email,
        password,
      },
    });
    return loginRes;
  } catch (error) {
    Message.error("服务器或网络错误！");
    console.log(error);
  }
};
