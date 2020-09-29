<template>
  <v-data-table
		:headers="headers"
		:items="reports"
		:items-per-page="5"
    item-key="id"
		class="elevation-1"
	></v-data-table>
</template>

<script>
export default {
  data(){
    return {
      headers: [
        {
          text: 'Название',
          value: 'title',
          align: 'left',
          sortable: false
        }
      ],
      reports: [
        {
          id: 0,
          title: 'Проведенных тренировок'
        },
        {
          id: 1,
          title: 'Пропуски по уважительной причине'
        },
        {
          id: 2,
          title: 'Пропуски по не уважительной причине'
        }
      ]
    };
  }
}
</script>
