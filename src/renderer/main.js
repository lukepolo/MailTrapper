require("./bootstrap");

import Vue from "vue";

import router from "./router";
import store from "./store";

global.Vue = Vue;

require("./mixins");
require("./components");

global.Store = store;

if (!process.env.IS_WEB) {
  Vue.use(require("vue-electron"));
}

Vue.config.productionTip = false;

new Vue({
  router,
  store
}).$mount("#app");
