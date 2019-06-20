import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from '@/vuex/store.js'   //vuex
import api from '@/http/api.js'       //http请求
import axios from 'axios'
import less from 'less'
import Mint from 'mint-ui';    //移动端UI
import 'mint-ui/lib/style.css'
import ElementUi from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'

import 'swiper/src/less/swiper.less';

import VueAwesomeSwiper from 'vue-awesome-swiper';

import VueWechatTitle from 'vue-wechat-title'

import http from '@/http/http.js'

Vue.use(ElementUi)

Vue.use(Mint)

Vue.use(VueAwesomeSwiper);

Vue.use(VueWechatTitle)

Vue.config.productionTip = false

Vue.prototype.$api = api

Vue.prototype.$http = axios

// axios({
//   methods: "get",
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded"
//   },
//   url: "/Api/Api/index"
// }).then(function (res) {
//   if (res.data.data.user.user_id <= 0) {
//     location.href = "http://" + window.location.host + "/Api/api/wx_login?route=" + router.history.current.fullPath
//   }
//   else {
//   }
// }).catch(function (error) {
// });

// 页面修改时修改浏览器标签栏
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


axios.interceptors.request.use((config) => {
  Mint.Indicator.open({//打开loading
    text: '加载中...',
    spinnerType: 'fading-circle'
  });
  return config;
}, (err) => {
  return Promise.reject(err)

})

axios.interceptors.response.use((response) => {
  Mint.Indicator.close();//关闭loading
  return response;
}, (err) => {
  return Promise.reject(err);

})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
