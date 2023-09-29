<script>
import MainLayout from './layouts/MainLayout.vue';

export default {
	name: 'App',
	components: {
		'main-layout': MainLayout,
	},
	data() {
		return {
			layout: 'main-layout',
		};
	},
};
</script>

<template>
	<component :is="layout">
		<router-view></router-view>
	</component>
</template>

<style scoped></style>
