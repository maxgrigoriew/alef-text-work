<script setup>
import { ref, computed, onMounted } from 'vue';
import IsInput from './../components/UI/IsInput.vue';
import IsButton from './../components/UI/IsButton.vue';
import { useStore } from 'vuex';

const store = useStore();

const limitChildren = ref(5);

const parentName = computed({
	get() {
		return store.state.parent.name;
	},
	set(value) {
		store.commit('setParentName', value);
	},
});

const parentAge = computed({
	get() {
		return store.state.parent.age;
	},
	set(value) {
		store.commit('setParentAge', value);
	},
});

const addChild = () => store.commit('addChild');

const removeChild = (id) => store.commit('removeChild', id);

const saveForm = () => store.commit('saveForm');

const childrenCount = computed(() =>
	store.state.children.length < limitChildren.value ? true : false
);

onMounted(() => store.commit('initialData'));
</script>

<template>
	<p class="title">Персональные данные</p>
	<is-input
		class="input-name"
		label="Имя"
		placeholder="Имя"
		v-model="parentName"
	></is-input>

	<is-input
		class="input"
		label="Возраст"
		placeholder="Возраст"
		v-model="parentAge"
	>
	</is-input>
	<div class="grid">
		<div class="grid__top">
			<h2 class="title grid__title">Дети (макс. 5)</h2>
			<is-button
				v-if="childrenCount"
				@click="addChild"
				outline="true"
				icon="true"
				>Добавить ребенка</is-button
			>
		</div>
		<ul class="grid__list">
			<li
				class="grid__item"
				v-for="(item, index) in store.state.children"
				:key="item.id"
			>
				<is-input
					class="input"
					label="Имя"
					placeholder="Имя"
					v-model="store.state.children[index].name"
				></is-input>
				<is-input
					class="input"
					label="Имя"
					placeholder="Возраст"
					v-model="store.state.children[index].age"
				>
				</is-input>
				<is-button @click="removeChild(item.id)" class="grid__link" link="true"
					>Удалить</is-button
				>
			</li>
		</ul>
		<p v-if="!childrenCount" class="grid__info">Превышен лимит</p>
		<is-button @click="saveForm" class="grid__save">Сохранить</is-button>
	</div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/vars';
.input-name {
	margin-top: 20px;
	margin-bottom: 10px;
}

.grid {
	padding-top: 33px;
	&__top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
	}
	&__list {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	&__item {
		display: grid;
		grid-template-columns: 260px 260px 1fr;
		gap: 18px;
	}

	&__link {
		align-self: center;
	}
	&__info {
		padding-top: 20px;
		text-align: center;
		color: $accent-color;
		font-weight: 500;
	}

	&__save {
		margin-top: 30px;
	}
}
</style>
