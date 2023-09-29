<script setup>
import IsHeader from '../components/IsHeader.vue';
import IsFooter from '../components/IsFooter.vue';
</script>

<template>
	<IsHeader />
	<slot />
	<IsFooter />
</template>
