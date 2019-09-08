<template>
	<header class="header">
		<d-container>
			<div class="header__top-panel">
				<div class="header__top-panel--navbar">
					<nav>
						<router-link to="/">Home</router-link>
						<router-link to="/about">About</router-link>
					</nav>
				</div>
				<div class="header__top-panel--logotype-wrapper">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png" alt="">
				</div>
			</div>
		</d-container>
	</header>
</template>

<script>

export default {
	name: 'HeaderMain',
	components: {
	}
}
</script>

<style lang="sass" commonstyle>
</style>
