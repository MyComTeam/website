<template>
	<div id="app">
		<header-main></header-main>
		<router-view/>
	</div>
</template>

<script>
// eslint-disable-next-line
import commonstyle from './styles/commonstyle.sass' 
import headerMain from './components/layout/header-main'

export default {
	components: {
		headerMain
	}
}
</script>

<style lang="sass" commonstyle>
</style>
