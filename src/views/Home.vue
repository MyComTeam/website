<template>
	<main>
		<banner
			title="Welcome to my web site"
			desctipt="this is very nice description (sorry my bad English. lorem don't working) :D"
			img="https://images.unsplash.com/photo-1566545455366-bcae28fd3929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1956&q=80"
		/>
		<services-types>
			<services-card
				title="Standat"
				:list="['Минет','Классика','Массаж']"
				desc="lorem"
				link="#"
			/>
			<services-card
				title="Standat"
				:list="['Минет','Классика','Массаж','Стриптиз','Горловой минет']"
				desc="lorem"
				link="#"
			/>
			<services-card
				title="Standat"
				:list="['Минет','Классика','Массаж','Стриптиз','Горловой минет','Анал', 'Подчинение', 'Доминирование над вами', 'Доминирование над девушкой']"
				desc="lorem"
				link="#"
			/>
		</services-types>
	</main>
</template>

<script>
import banner from '../components/banner'
import servicesTypes from '../components/services-types/'
import servicesCard from '../components/services-types/card'

export default {
	name: 'home',
	components: {
		banner,
		servicesTypes,
		servicesCard
	}
}
</script>
