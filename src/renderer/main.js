require('./assets/styles/app.scss')

require('./assets/font-awesome/fontawesome');
require('./assets/font-awesome/packs/solid');
require('./assets/font-awesome/packs/light');

import SmtpServer from './SmtpServer'
new SmtpServer().start()

import Vue from 'vue'

import router from './router'
import store from './store'

global.Vue = Vue;

global.moment = require("moment-timezone");
require("moment-precise-range-plugin");
moment.tz.setDefault("UTC");

require('./mixins');
require('./components');

global.Store = store;

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

new Vue({
  router,
  store,
}).$mount('#app')