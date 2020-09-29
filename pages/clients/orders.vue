<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="orders"
          :items-per-page="5"
          item-key="id"
          class="elevation-1"
        >
          <template v-slot:item.paid="{ item }">
            <v-icon color="green" v-if="item.paid">mdi-checkbox-marked-circle</v-icon>
            <v-icon color="red" v-else>mdi-close-circle</v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex';

export default {
  data(){
    return {
      headers: [
        {
          text: 'Дата',
          align: 'start',
          value: 'date'
        },
        {
          text: 'Время',
          align: 'start',
          value: 'time'
        },
        {
          text: 'ФИО',
          align: 'start',
          value: 'name'
        },
        {
          text: 'Оплачен',
          align: 'start',
          value: 'paid'
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
      orders: state => state.tables.orders
    })
  }
}
</script>
