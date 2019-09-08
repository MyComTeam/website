<template>
	<div class="container">
		<div class="services-list">
			<slot/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'servicesTypes'
}
</script>

<style lang="sass" commonstyle>
	.services-list
		padding: 25px 0px
		display: flex
		align-items: flex-start
		flex-wrap: wrap
</style>
