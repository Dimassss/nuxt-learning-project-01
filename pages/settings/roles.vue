<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="mb-16">
        <v-data-table
          :headers="headers"
          :items="roles"
          item-key="title"
          class="elevation-1"
        ></v-data-table>

        <v-btn
          right
          bottom
          dark
          fab
          fixed
          color="lime"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      headers: [
        {
          text: 'Название',
          align: 'start',
          sortable: false,
          value: 'title'
        }
      ],
      roles: [
        {
          title: 'Администратор'
        },
        {
          title: 'Тренер'
        },
        {
          title: 'Координатор расписания'
        },
        {
          title: 'Менеджер по продажам'
        }
      ]
    };
  }
}
</script>
