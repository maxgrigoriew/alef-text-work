<script setup>
import { computed } from 'vue';
const props = defineProps(['label', 'placeholder', 'disabled', 'modelValue']);
const emits = defineEmits(['modelValue']);
const className = computed(() => ({
	disabled: props.disabled,
}));
</script>
<template>
	<div class="input">
		<label class="input__label" for="#input">
			<div class="input__title">
				<slot> {{ props.label }}</slot>
			</div>
		</label>
		<input
			:disabled="props.disabled"
			id="input"
			class="input__text"
			:class="className"
			type="text"
			:placeholder="props.placeholder"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
	</div>
</template>
<style lang="scss">
@import '../../assets/scss/vars';
.input {
	position: relative;
	z-index: 1;
	border-radius: 4px;
	border: 1px solid #f1f1f1;

	&__label {
		position: absolute;
		top: 8px;
		pointer-events: none;
	}
	&__title {
		padding: 0 16px;
		font-size: 13px;
	}
	&__text {
		padding: 26px 16px 6px;
		color: $dark-color;
		width: 100%;
		font-family: inherit;
		border: none;
		line-height: 24px;
	}
}

.disabled {
	background-color: $light-color;
}
</style>
