// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueCumulio from './vue-cumulio-dashboard.common';
import CompositionApi from "@vue/composition-api";
console.log(VueCumulio);
Vue.config.productionTip = false
Vue.use(CompositionApi);
Vue.use(VueCumulio);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
