<template>
  <div>
    <v-data-table
  		:headers="headers"
  		:items="rooms"
  		:items-per-page="5"
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
      rooms: [
        { id: 0, title: 'Бассейн' },
        { id: 1, title: 'Тренажерный зал' },
        { id: 2, title: 'Зал групповых программ №1' },
        { id: 3, title: 'Зал функционального тренинга' },
        { id: 4, title: 'Зал групповых программ №2' },
        { id: 5, title: 'Зал сайкла' },
        { id: 6, title: 'Зал йоги и пилатеса' },
        { id: 7, title: 'Зал единоборств' },
        { id: 8, title: 'Детский Клуб' }
      ]
    };
  }
}
</script>
