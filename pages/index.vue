<template>
  <v-container>
    <v-row>
      <v-col
        cols="6"
        cols-md="12"
      >
        <v-card>
          <v-card-text>
            <div>17 сентября 2019</div>
  					<p class="title text--primary">
  						Расписание на сегодня
  					</p>
            <v-sheet height="350px">
  						<v-calendar
								:events="events"
								@click:event="editEvent($event.event.id)"
								color="lime"
								first-interval="6"
								interval-count="18"
								locale="ru"
								type="day"
  						>
  							<template v-slot:interval="{ hour }">
  								<div class="text-center">
  									{{ hour }} o'clock
  								</div>
  							</template>
  						</v-calendar>
  					</v-sheet>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        cols="6"
        cols-md="12"
      >
        <v-card>
          <v-card-text>
            <div>17 сентября 2019</div>
  					<p class="title text--primary">
  						Последние записи на студии
  					</p>
          </v-card-text>
          <v-data-table
            :headers="headers.orders"
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
        </v-card>
      </v-col>

      <v-col
        cols="6"
        cols-md="12"
      >
        <v-card>
          <v-card-text>
            <div>17 сентября 2019</div>
  					<p class="title text--primary">
  						Новые члены клуба
  					</p>
          </v-card-text>

          <v-data-table
            :headers="headers.users"
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
        </v-card>
      </v-col>

      <v-col
        cols="6"
        cols-md="12"
      >
        <v-card height="100%">
          <v-card-text>
            <div>17 сентября 2019</div>
  					<p class="title text--primary">
  						График посещаемости Клуба | Wegym Барклая
  					</p>
          </v-card-text>

          <v-card-text>
					<v-sparkline
							:auto-line-width="autoLineWidth"
							:gradient="['#1abaee']"
							:gradient-direction="gradientDirection"
							:labels="labels"
							:line-width="width"
							:padding="padding"
							:smooth="radius"
							:stroke-linecap="lineCap"
							:type="type"
							:value="value"
							auto-draw
							label-size="5"
					></v-sparkline>
				</v-card-text>
        </v-card>
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
      autoLineWidth: false,
      gradientDirection: 'top',
      labels: ['10.11', '12.11', '13.11', '14.11', '15.11', '16.11', '17.11'],
      width: 2,
      padding: 8,
      radius: 10,
      lineCap: 'round',
      type: 'trend',
      value: [11, 9, 5, 17, 15, 2, 13],
      events: [],
      headers: {
        orders: [
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
        ],
        users: [
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
            text: 'Статус',
            align: 'start',
            value: 'status'
          },
          {
            text: '',
            value: 'actions',
            sortable: false
          }
        ]
      },
      currentUser: null
    }
  },
  computed: {
    ...mapState({
      orders: state => state.tables.orders,
      users: state => state.tables.users
    })
  },
  methods: {
    editEvent(id){},
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
