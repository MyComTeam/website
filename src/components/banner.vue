<template>
	<div class="banner">
		<h1>{{title}}</h1>
		<p>{{desctipt}}</p>
	</div>
</template>

<script>
export default {
	name: 'banner',
	props: ['title', 'desctipt']
}
</script>
