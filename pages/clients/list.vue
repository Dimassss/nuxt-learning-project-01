<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="users"
          :items-per-page="5"
          item-key="id"
          class="elevation-1"
        >
          <template v-slot:item.photo="{ item }">
            <v-avatar class="my-2" item size="48px">
              <v-img :src="item.photo" :alt="`Photo of ${item.fio}`"/>
            </v-avatar>
          </template>
          <template v-slot:item.status="{ item }">
            <v-icon color="green" v-if="item.status">mdi-checkbox-marked-circle</v-icon>
            <v-icon color="red" v-else>mdi-close-circle</v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapState} from 'vuex';

export default {
  data(){
    return {
      headers: [
        {
          text: 'Фото',
          align: 'start',
          value: 'photo',
          sortable: false
        },
        {
          text: 'ФИО',
          align: 'start',
          value: 'name'
        },
        {
          text: 'Дата регистрации',
          align: 'start',
          value: 'createDate'
        },
        {
          text: 'Последний визит',
          align: 'start',
          value: 'lastVisit'
        },
        {
          text: 'Статус',
          align: 'start',
          value: 'status'
        }
      ]
    };
  },
  computed: {
    ...mapState({
      users: state => state.tables.users
    })
  }
}
</script>
