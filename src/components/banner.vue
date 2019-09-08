<template>
	<div class="banner" :style="'background:url('+img+') center center / cover no-repeat;'">
		<div class="container">
			<div class="banner__info--title">
				{{title}}
			</div>
			<div class="banner__info--description">
				<p v-html="desctipt"></p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'banner',
	props: ['title', 'desctipt', 'img']
}
</script>

<style lang="sass" commonstyle>
	.banner
		height: 767px
		position: relative
		color: #fff
		&:before
			content: ''
			position: absolute
			background: rgba(32, 34, 62, 0.87)
			top: 0
			left: 0
			right: 0
			bottom: 0

		.container
			position: relative
			display: flex
			flex-direction: column
			height: 100%
			width: 100%
			align-items: center
			justify-content: center
		&__info
			&--title
				font-size: 45px
			&--description
				font-size: 15px

</style>
