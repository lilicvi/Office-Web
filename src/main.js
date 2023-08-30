import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../public/reset.css'
import 'fullpage.js/vendors/scrolloverflow';
import VueFullPage from 'vue-fullpage.js'
const  cliWidth =  document.documentElement.clientWidth
document.documentElement.style.fontSize = 100 * (cliWidth/1920) + 'px'
window.onresize = function(){
  const  cliWidth =  document.documentElement.clientWidth
  document.documentElement.style.fontSize = 100 * (cliWidth/1920) + 'px'
}
Vue.use(VueFullPage);
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
