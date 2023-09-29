<script setup>
import IsInput from './../components/UI/IsInput.vue';
import IsButton from './../components/UI/IsButton.vue';
</script>

<template>
	<p class="title">Персональные данные</p>
	<is-input class="input-name" label="Имя" placeholder="Имя"></is-input>
	<is-input class="input" label="Возраст" placeholder="Возраст"> </is-input>

	<div class="grid">
		<div class="grid__top">
			<h2 class="title grid__title">Дети (макс. 5)</h2>
			<is-button outline="true" icon="true">Добавить ребенка</is-button>
		</div>
		<ul class="grid__list">
			<li class="grid__item">
				<is-input class="input" label="Возраст" placeholder="Возраст">
				</is-input>
				<is-input class="input" label="Возраст" placeholder="Возраст">
				</is-input>
				<is-button>Удалить</is-button>
			</li>
			<li class="grid__item">
				<is-input class="input" label="Возраст" placeholder="Возраст">
				</is-input>
				<is-input class="input" label="Возраст" placeholder="Возраст">
				</is-input>
				<is-button link="true">Удалить</is-button>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
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

		&:last-child {
			align-self: center;
		}
	}
}
</style>
