import Vue from 'vue';
import axios from 'axios';
import { request } from '@/core/ajax';

Vue.prototype.$http = axios;
axios.defaults.baseURL = '/api';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken'
// axios.defaults.xsrfCookieName = 'csrftoken'


export default {
  login(username, password) {
    return request('login', 'POST', {
      data: {
        username,
        password
      }
    });
  },
  logout() {
    return request('logout', 'GET', {});
  },
  getTopicList(params) {
    return request('topics', 'GET', { params });
  },
  getTopic(id) {
    return request('topics/' + id, 'GET');
  },
  searchFiles(params) {
    return request('search/files', 'GET', { params });
  },
  searchTopics(params) {
    return request('search/topics', 'GET', { params });
  },
  riotStatus() {
    return request('system/status/riot', 'GET');
  },
  rebuildIndex() {
    return request('system/reindex', 'GET');
  }
};
