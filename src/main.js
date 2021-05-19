import './assets/rem'

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import {
	Toast,
	Swipe,
	SwipeItem,
	Button,
	Sticky,
	NavBar,
	Icon,
	Tabbar,
	TabbarItem,
	ActionSheet,
	PullRefresh,
	Loading,
	Area ,
	 Grid, GridItem 
} from 'vant';
Vue.use(Swipe).use(SwipeItem).use(Button).use(Sticky).use(NavBar).use(Icon)
	.use(Tabbar).use(TabbarItem).use(ActionSheet).use(PullRefresh).use(Loading)
	.use(Area).use(Grid).use(GridItem);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})
