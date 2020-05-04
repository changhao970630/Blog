import fetch from "./index";

export default class rq {
  static fetchGet(url, params = {}) {
    return new Promise((reslove, reject) => {
      fetch({
        url,
        method: "get",
        params,
      })
        .then((res) => {
          reslove(res);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }
  static fetchPost(url, data = {}) {
    return new Promise((reslove, reject) => {
      fetch({
        url,
        method: "post",
        data: data,
      })
        .then((res) => {
          reslove(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  static fetchDelete(url, data = {}) {
    return new Promise((reslove, reject) => {
      fetch({
        url,
        method: "delete",
        data: data,
      })
        .then((res) => {
          reslove(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  static fetchPut(url, data) {
    return new Promise((reslove, reject) => {
      fetch({
        url,
        method: "put",
        data,
      })
        .then((res) => {
          reslove(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
