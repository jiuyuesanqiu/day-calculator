import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.mixin({
	onLoad() {
		wx.showShareMenu()
	}
})

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
