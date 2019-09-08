<template>
	<div id="services">
		<d-container>
			<div class="services-list">
				<slot/>
			</div>
		</d-container>
	</div>
</template>

<script>
export default {
	name: 'servicesTypes'
}
</script>

<style lang="sass" commonstyle>
	#services
		padding: 25px 0px
	.services-list
		display: flex
		align-items: flex-start
		flex-wrap: wrap
</style>
