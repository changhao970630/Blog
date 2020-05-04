import axios from "axios";
import { getToken } from "../tools/common";
import store from "../store";

// const host = "http://212.64.75.109/";
const host = "http://localhost:3000";
import { Message } from "element-ui";
let fetch = axios.create({
  baseURL: host,
  timeout: 10000,
  headers: {
    Authorization: getToken(),
  },
});

fetch.interceptors.request.use(
  (config) => {
    const userInfo = JSON.parse(localStorage.getItem("user_info"));
    let user_id;
    try {
      user_id = store.state.user.USER_INFO.id
        ? store.state.user.USER_INFO.id
        : userInfo.id;
    } catch (e) {
      user_id = null;
    }
    if (user_id) {
      switch (config.method) {
        case "get": {
          config.params.user_id = user_id;
        }
      }
    }
    config.headers.Authorization = getToken();
    return config;
  },
  (error) => {
    Message.error("服务器或网络错误，请检查网络！");
    return Promise.reject(error);
  }
);

fetch.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  (error) => {
    Message.error("服务器或网络错误，请检查网络！");
    return Promise.reject(error);
  }
);

export default fetch;
