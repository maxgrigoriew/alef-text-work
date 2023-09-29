import { createWebHistory, createRouter } from 'vue-router';
import Home from './src/pages/Home.vue';
import About from './src/pages/About.vue';
const routes = [
	{
		path: '/',
		component: Home,
		meta: {
			layout: 'MainLayout',
		},
	},
	{
		path: '/about',
		component: About,
		meta: {
			layout: 'MainLayout',
		},
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
