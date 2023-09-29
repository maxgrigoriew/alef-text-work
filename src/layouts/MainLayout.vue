<script setup>
import IsHeader from '../components/IsHeader.vue';
import IsFooter from '../components/IsFooter.vue';
</script>

<template>
	<IsHeader />
	<div class="wrapper">
		<div class="container">
			<slot />
		</div>
	</div>
	<IsFooter />
</template>
<style scoped lang="scss">
.wrapper {
	padding: 30px 0;
}
</style>
