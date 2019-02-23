// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//因为后台数据是用的export导出 而不是export defaul（一个页面只能导出一个）
import *as $http from './requests'
//把接受的数据方法挂在到vue原型上 在其他页面new出来的vue的实例就可以调用vue原型上的$http下的方法 
//这样其他页面也可以接受到后台的数据 ***要在钩子函数（上可以$this出vue实例）上调用
Vue.prototype.$http=$http

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//路由
  store,//vuex  引入后vue实例都可以用$store上的东西
  components: { App },
  template: '<App/>'
})
