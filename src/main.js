import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import ShardsVue from 'shards-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'shards-ui/dist/css/shards.css'

Vue.config.productionTip = false
Vue.use(ShardsVue)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
