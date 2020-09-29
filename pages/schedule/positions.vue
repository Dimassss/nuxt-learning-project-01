<template>
  <div>
    <v-data-table
  		:headers="headers"
  		:items="positions"
      item-key="id"
  		class="elevation-1"
  	></v-data-table>

    <v-btn
      color="lime"
      dark
      bottom
      right
      fixed
      fab
    ><v-icon>mdi-plus</v-icon></v-btn>
  </div>
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
      positions: [
        {
          id: 0,
          title: 'Фитнес-менеджер'
        },
        {
          id: 1,
          title: 'Координатор тренажёрного зала'
        },
        {
          id: 2,
          title: 'Мастер-тренер тренажёрного зала'
        },
        {
          id: 3,
          title: 'Персональный тренер тренажёрного зала'
        },
        {
          id: 4,
          title: 'Тренер тренажёрного зала'
        },
        {
          id: 5,
          title: 'Координатор групповых программ'
        },
        {
          id: 6,
          title: 'Мастер-тренер групповых программ'
        },
        {
          id: 7,
          title: 'Персональный тренер групповых программ'
        },
        {
          id: 8,
          title: 'Тренер групповых программ'
        },
        {
          id: 9,
          title: 'Тренер студии йоги'
        }
      ]
    };
  }
}
</script>
