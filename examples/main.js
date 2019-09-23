import Vue from 'vue'
import App from './App.vue'
import Frame from '../packages/index'
Vue.use(Frame)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
