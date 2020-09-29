<template>
  <div>
    <v-data-table
  		:headers="headers"
  		:items="types"
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
      types: [
        {
          id: 0,
          title: 'Платное'
        },
        {
          id: 1,
          title: 'По предварительной записи'
        },
        {
          id: 2,
          title: 'Мастер-класс'
        }
      ]
    };
  }
}
</script>
