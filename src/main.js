import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import IconBtn from './components/IconBtn';
import timeFilters from './core/time';
import antd from 'ant-design-vue/lib/index';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;
Vue.component(IconBtn.name, IconBtn);
Vue.use(antd);

// 使用部分引入
// Vue.component(Button.name, Button)
// Vue.component(Layout.name, Layout)

for (let pair of Object.entries(timeFilters)) {
  Vue.filter(pair[0], pair[1]);
}

// 注册全局消息提示
// Vue.prototype.$message.config({
//   duration: 2,
//   top: '80px',
// });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
