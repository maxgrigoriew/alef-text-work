<script setup>
import { ref, reactive, watch, computed, onMounted } from 'vue';
import IsInput from './../components/UI/IsInput.vue';
import IsButton from './../components/UI/IsButton.vue';

let children = ref([]);

const parent = reactive({
	name: '',
	age: '',
});

const child = reactive({
	name: '',
	age: '',
});

const limitChildren = ref(2);

const addChild = () => {
	const newChild = {
		name: '',
		age: '',
		id: Date.now(),
	};
	children.value.push(newChild);
	console.log(children.value);
};

const removeChild = (id) => {
	console.log(id);
	children.value = children.value.filter((item) => item.id !== id);
};

const checkValidForm = () => {
	if (!parent.age || !parent.age) {
		return false;
	} else {
		return true;
	}
};
const saveForm = () => {
	if (checkValidForm()) {
		console.log('valid');
		localStorage.setItem('parent', JSON.stringify(parent));
		localStorage.setItem('children', JSON.stringify(children.value));
	}
};
const childrenCount = computed(() =>
	children.value.length < limitChildren.value ? true : false
);

onMounted(() => {
	const parentStorage = JSON.parse(localStorage.getItem('parent'));
	const childrenStorage = JSON.parse(localStorage.getItem('children'));
	parent.name = parentStorage.name;
	parent.age = parentStorage.age;

	childrenStorage.forEach((element) => {
		children.value.push(element);
	});
});
</script>

<template>
	parent {{ parent }} <br />
	children {{ children }}
	<p class="title">Персональные данные</p>
	<is-input
		class="input-name"
		label="Имя"
		placeholder="Имя"
		v-model="parent.name"
	></is-input>

	<is-input
		class="input"
		label="Возраст"
		placeholder="Возраст"
		v-model="parent.age"
	>
	</is-input>
	<!-- children -->

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
			<li class="grid__item" v-for="(item, index) in children" :key="item.id">
				<is-input
					class="input"
					label="Имя"
					v-model="children[index].name"
					placeholder="Имя"
				>
				</is-input>
				<is-input
					class="input"
					label="Имя"
					v-model="children[index].age"
					placeholder="Возраст"
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
