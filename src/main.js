import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';


Vue.use(Antd);

Vue.prototype.$axios = axios;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
