<template>
  <div>
    <v-data-table
  		:headers="headers"
  		:items="classes"
      item-key="id"
  		class="elevation-1"
  	>
      <template v-slot:item.isPay="{ item }">
        <v-icon v-if="item.isPay">mdi-checkbox-marked-circle</v-icon>
      </template>
      <template v-slot:item.preEntry="{ item }">
        <v-icon v-if="item.preEntry">mdi-checkbox-marked-circle</v-icon>
      </template>
    </v-data-table>

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
          value: 'name',
        },
        {
          text: 'Направление',
          value: 'direction',
        },
        {
          text: 'Платное',
          value: 'isPay',
        },
        {
          text: 'По записи',
          value: 'preEntry',
        },
      ],
      classes: [
        { id: 0, name: 'ABS Stretch', direction: 'Классы смешанного формата', },
				{ id: 1, name: 'Step', direction: 'Аэробные классы', },
				{ id: 2, name: 'Power Training', direction: 'Силовые классы', },
				{ id: 3, name: 'Up Body Power', direction: 'Силовые классы', },
				{ id: 4, name: 'Low Body Power', direction: 'Силовые классы', },
				{ id: 5, name: 'Functional Training', direction: 'Функциональный тренинг',},
				{ id: 6, name: 'Interval Training', direction: 'Функциональный тренинг',},
				{ id: 7, name: 'Functional Surf', direction: 'Функциональный тренинг', isPay: true},
				{ id: 8, name: 'Boxing', direction: 'Единоборства',},
				{ id: 9, name: 'Kick-Boxing', direction: 'Единоборства',},
				{ id: 10, name: 'Mix Fight', direction: 'Единоборства',},
				{ id: 11, name: 'Capoeira', direction: 'Единоборства',},
				{ id: 12, name: 'HIIT', direction: 'Студии', isPay: true, preEntry: true},
				{ id: 13, name: 'Yoga in the air', direction: 'Студии', isPay: true, preEntry: true},
				{ id: 14, name: 'TRX Medicine', direction: 'Студии', isPay: true, preEntry: true},
				{ id: 15, name: 'Reebok Стань Человеком', direction: 'Студии', isPay: true},
				{ id: 16, name: 'Aqua Flat', direction: 'Студии', isPay: true},
				{ id: 17, name: 'Perfect Athlete', direction: 'Студии', isPay: true},
				{ id: 18, name: 'TRX', direction: 'Студии',},
				{ id: 19, name: 'Круговая тренировка', direction: 'Студии',},
				{ id: 20, name: 'Pole Dance', direction: 'Студии',},
      ]
    };
  }
}
</script>
