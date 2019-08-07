import Vue from 'vue';
import axios from 'axios';

/**
 * @param url
 * @param method get|post|put|delete...
 * @param params like queryString. if a url is index?a=1&b=2, params = {a: '1', b: '2'}
 * @param data post data, use for method put|post
 * @returns {Promise}
 */
function request(url, method, options) {
  if (options !== undefined) {
    var { params = {}, data = {} } = options;
  } else {
    params = data = {};
  }
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      params,
      data
    })
      .then(res => {
        // API正常返回(status=20x), 是否错误通过有无error判断
        if (res.data.err !== null) {
          Vue.prototype.$message.error(res.data.err);
          reject(res);
          // 若后端返回为登录，则为session失效，应退出当前登录用户
          if (res.data.err.startsWith('please login')) {
            if (window.location.href.indexOf('/login') === -1) {
              window.location.href = '/login';
            }
          }
        } else {
          resolve(res);
          // if (method !== 'get') {
          //   Vue.prototype.$success('Success')
          // }
        }
      }, res => {
        // API请求异常，一般为Server error 或 network error
        reject(res);
        Vue.prototype.$message.error(res.data.data);
      });
  });
}

export { request };
