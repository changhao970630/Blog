import axios from "axios";
import { getToken } from "../tools/common";

let host =
  process.env.NODE_ENV == "development"
    ? "http://127.0.0.1:3000"
    : "http://quancundexiwang.wang";
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
