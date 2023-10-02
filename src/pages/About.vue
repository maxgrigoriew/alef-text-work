<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const checkAge = (age) => {
	let txt;
	let count = age % 100;
	if (count >= 5 && count <= 20) {
		txt = 'лет';
	} else {
		count = count % 10;
		if (count == 1) {
			txt = 'год';
		} else if (count >= 2 && count <= 4) {
			txt = 'года';
		} else {
			txt = 'лет';
		}
	}
	return txt;
};

onMounted(() => {
	store.commit('initialData');
});
</script>
<!-- asd -->
<template>
	<div class="about">
		<h2 class="title about__title">Персональные данные</h2>
		<div class="about__parent">
			{{ `${store.state.parent.name} ${store.state.parent.age}` }}
		</div>
		<h2 class="title about__title">Дети</h2>

		<ul class="about__list">
			<li
				class="about__item"
				v-for="item in store.state.children"
				:key="item.id"
			>
				<span class="about__item-info">
					{{ `${item.name}, ${item.age} ${checkAge(item.age)}` }}
				</span>
			</li>
		</ul>

		<p v-if="!store.state.children.length" class="about__info">Детей нет</p>
	</div>
</template>

<style lang="scss">
@import '../assets/scss/vars';
.about {
	&__title {
		margin-bottom: 20px;
	}
	&__parent {
		font-size: 16px;
		font-weight: 700;
		color: $dark-color;
		margin-bottom: 60px;
	}

	&__item-info {
		display: inline-block;
		font-size: 16px;
		font-weight: 700;
		color: $dark-color;
		margin-bottom: 20px;
		border-radius: 5px;
		background: #f1f1f1;
		padding: 10px 20px;
	}
	&__info {
		padding-top: 20px;
		color: $accent-color;
		font-weight: 500;
	}
}
</style>
