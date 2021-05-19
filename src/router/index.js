import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index_joblist from '@/components/index_joblist'


Vue.use(Router)

export default new Router({
	routes: [{
			name: 'login',
			path: '/',
			component: login
		},
		{
			name: 'index_joblist',
			path: '/index_joblist',
			component: index_joblist
		}
	]
})
