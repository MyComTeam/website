<template>
	<div class="services-card">
		<div class="services-card__head">
			<div class="services-card__head--title">{{title}}</div>
		</div>
		<div class="services-card__body">
			<ul class="services-card__body--list">
				<li v-for="(item, index) in list" :key="index" v-html="item"></li>
			</ul>
		</div>
		<div class="services-card__footer">
			<a :href="link.href||link">{{link.text||'Choose'}}</a>
		</div>
	</div>
</template>

<script>
// eslint-disable-next-line
import serviceCardStyle from './card.sass'
export default {
	name: 'servicesCart',
	props: ['title', 'list', 'desc', 'link']
}
</script>

<style lang="sass" serviceCardStyle>
</style>
