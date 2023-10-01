<script setup>
import { useStore } from 'vuex';
const store = useStore();
</script>
<template>
	<div class="about">
		<h2 class="title about__title">Персональные данные</h2>
		{{ store.state.todos }}
	</div>
</template>

<style lang="scss">
.about {
	&__title {
		margin-bottom: 20px;
	}
	&__parent {
	}
}
</style>
