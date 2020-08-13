/*
 * @Author: your name
 * @Date: 2020-06-15 17:36:27
 * @LastEditTime: 2020-06-15 18:18:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \happyfri\app\src\main.js
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./style/common.less";
import "./config/rem";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
