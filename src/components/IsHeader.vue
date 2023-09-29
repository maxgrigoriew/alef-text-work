<template>
	<header class="header">
		<div class="container-fluid">
			<div class="header__inner">
				<a class="header__logo">
					<img src="./../assets/images/logo.png" alt="Логотип компании Alef" />
				</a>
				<nav class="nav">
					<ul class="nav__list">
						<li class="nav__item">
							<router-link to="/" class="nav__link">Форма</router-link>
						</li>
						<li class="nav__item">
							<router-link to="/about" class="nav__link">Превью</router-link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<style scoped lang="scss">
@import './../assets/scss/vars.scss';
.header {
	background-color: $light-color;
	box-shadow: 0px 1px 0px 0px rgba(17, 17, 17, 0.1);
	&__inner {
		position: relative;
		padding: 26px 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	&__logo {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
	}
}

.nav {
	&__list {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
	}
	&__link {
		transition: $transition;
		&:hover {
			color: $accent-color;
		}
	}
}
</style>
