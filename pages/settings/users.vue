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
          <template v-slot:item.actions="{ item }">
            <v-btn rounded @click="openEditUserModal(item)" icon>
              <v-icon small>mdi-pencil</v-icon>
            </v-btn>
            <v-btn rounded @click="deleteUser(item)" icon color="red darken-2">
              <v-icon small>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>

        <ClientCard
          v-if="currentUser"
          :user="currentUser"
          v-on:save-user="updateOrAddUser($event); currentUser = null"
          v-on:close="currentUser = null"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex';
import ClientCard from '@/components/modal/ClientCard';

export default {
  components: {
    ClientCard
  },
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
        },
        {
          text: '',
          value: 'actions',
          sortable: false
        }
      ],
      currentUser: null
    };
  },
  computed: {
    ...mapState({
      users: state => state.tables.users
    })
  },
  methods: {
    ...mapMutations({
      updateOrAddUser: 'tables/updateOrAddUser',
      deleteUsers: 'tables/deleteUsers'
    }),
    openEditUserModal(user){
      this.currentUser = user;
    },
    deleteUser(user){
      this.deleteUsers(user);
    }
  }
}
</script>
