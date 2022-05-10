import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueModalTor from "vue-modaltor/dist/vue-modaltor.common";
import VeeValidate from 'vee-validate';
import "vue-modaltor/dist/vue-modaltor.css";
import "bootstrap/dist/js/bootstrap.js";

import "bootstrap/dist/css/bootstrap.css";


Vue.config.productionTip = false
Vue.use(VueModalTor);
Vue.use(VeeValidate);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
