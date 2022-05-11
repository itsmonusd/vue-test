import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate';
import VueSweetalert2 from 'vue-sweetalert2';
import "bootstrap/dist/js/bootstrap.js";

import "bootstrap/dist/css/bootstrap.css";
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.config.productionTip = false
Vue.use(VeeValidate);
Vue.use(VueSweetalert2);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
