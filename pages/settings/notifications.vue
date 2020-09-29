<template>
  <v-container>
    <v-row>
      <v-col
        cols="5"
        cols-md="6"
        cols-sm="12"
      >
        <v-card>
          <v-card-title>Типы уведомлений</v-card-title>
          <v-card-text>
            <v-switch
              v-for="sw in types"
              :key="sw.title"
              v-model="sw.value"
              :label="sw.title"
            ></v-switch>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="7"
        cols-md="6"
        cols-sm="12"
      >
        <v-card>
          <v-card-title>Уведомления по обслуживанию клиентов</v-card-title>
          <v-card-text>
            <v-switch
              v-for="sw in forClients"
              :key="sw.title"
              v-model="sw.value"
              :label="sw.title"
            ></v-switch>
          </v-card-text>
        </v-card>

        <div class="text-center ma-2">
          <v-btn
            class="uppercase"
            dark
            color="dark"
            @click="showNotification = true"
          >Тест Уведомления</v-btn>
          <v-snackbar
						color="error"
						v-model="showNotification"
            fixed
            absolute
						top
						right
  				>
  					Здесь будет текст уведомления
  					<v-btn
  							color="white"
  							text
  							@click="showNotification = false"
  					>
  						Закрыть
  					</v-btn>
  				</v-snackbar>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      showNotification: false,
      types: [
        {
          value: false,
          title: 'По почте'
        },
        {
          value: false,
          title: 'SMS'
        },
        {
          value: false,
          title: 'Push-уведомление'
        }
      ],
      forClients: [
        {
          value: false,
          title: 'Покупка занятий онлайн'
        },
        {
          value: false,
          title: 'Отмена покупки'
        },
        {
          value: false,
          title: 'Новое сообщение от клиента'
        },
        {
          value: false,
          title: 'Жалоба'
        },
        {
          value: false,
          title: 'Проблема с картой'
        }
      ]
    };
  }
}
</script>
