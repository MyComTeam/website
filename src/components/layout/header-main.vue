<template>
	<header class="header">
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
	.header
		padding: 15px 10px
		box-shadow: 0px 2px 3px rgba(140, 140, 140, 0.29)
		background: #fff
		&__top-panel
			display: flex
			align-items: center
			justify-content: flex-end
			&--navbar
				nav
					margin-right: 25px
					a
						display: inline-block
						text-decoration: none
						color: #4d4d4d
						margin-right: 10px
			&--logotype-wrapper
				img
					width: 50px
					display: block
</style>
