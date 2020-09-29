<template>
  <div>
    <v-data-table
  		:headers="headers"
  		:items="directions"
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
      directions: [
        { id: 0, title: 'Классы смешанного формата' },
        { id: 1, title: 'Аэробные классы' },
        { id: 2, title: 'Силовые классы' },
        { id: 3, title: 'Функциональный тренинг' },
        { id: 4, title: 'Силовые тренировки' },
        { id: 5, title: 'Функциональный тренинг' },
        { id: 6, title: 'Единоборства' },
        { id: 7, title: 'Программы Les Mills' },
        { id: 8, title: 'Танцевальные классы' },
        { id: 9, title: 'Разум и тело' },
        { id: 10, title: 'Групповые программы в бассейне' },
        { id: 11, title: 'Студии' }
      ]
    };
  }
}
</script>
