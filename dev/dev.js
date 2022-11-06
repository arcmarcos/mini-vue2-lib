import Vue from 'vue'
import App from './App.vue'
import { lib as components } from '@/main'

Vue.use(components)

new Vue({
  render: h => h(App),
}).$mount('#app')
