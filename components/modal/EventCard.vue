<template>
  <v-row justify="center">
    <v-dialog
      :value="currentEvent"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="grey darken-3">
          <v-btn icon dark @click="$emit('close')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Power Training</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="$emit('save', currentEvent)">СОХРАНИТЬ</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader class="subtitle-1">{{currentEvent.timePeriod}}</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{currentEvent.user.speciality}}</v-list-item-title>
              <v-list-item-subtitle class="mt-3">
                <v-avatar size="50" class="mr-3">
                  <img :alt="currentEvent.user.name.toUpperCase()" :src="currentEvent.user.photo"/>
                </v-avatar>
                <strong>{{currentEvent.user.name}}</strong>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Описание</v-list-item-title>
              <v-list-item-action-text class="subtitle-2">
                <template v-for="line in currentEvent.user.description.split('\n')">
                  {{line}}<br/>
                </template>
              </v-list-item-action-text>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-subheader>Участники (Оплачено)</v-subheader>
          <v-list-item-action-text>
            <v-chip
              pill
              class="ml-4 mt-4 pl-8"
              v-for="(part, i) in currentEvent.participients.paid"
              :key="i"
            >{{part}}</v-chip>

            <v-btn rounded dark color="grey darken-3" class="ml-4 mt-4">
              Добавить <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </v-list-item-action-text>

          <v-subheader v-if="!!currentEvent.participients.unPaid.length">Не оплачено</v-subheader>
          <v-list-item-action-text v-if="!!currentEvent.participients.unPaid.length">
            <v-chip
              pill
              class="ml-4 mt-4 pl-8"
              v-for="(part, i) in currentEvent.participients.unPaid"
              :key="i"
            >{{part}}</v-chip>
          </v-list-item-action-text>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
function getTime(dayOfWeek, time){
  let d = new Date();
  d.setDate(+d.getDate() - d.getDay() + dayOfWeek);

  return `${d.toLocaleDateString().split('.').reverse().join('-')} ${time}`.trim();
}

export default {
  props: ['event'],
  data () {
    return {
      currentEvent: null
    }
  },
  beforeMount(){
    this.currentEvent = JSON.parse(JSON.stringify(this.event));
    this.currentEvent = {
      timePeriod: '20.11.2019 12:30-14:00',
      user: {
        speciality: 'Тренер',
        photo: 'url_to_img',
        name: 'Пахомова Екатерина',
        description: `Силовая тренировка с использованием дополнительного оборудования, направленная на проработку и укрепление основных мышечных групп.
                      Рекомендована для всех уровней подготовленности.
              				Продолжительность класса 55 мин.`
      },
      participients: {
        paid: ['Карпухина Елизавета', 'Карпухина Елизавета', 'Карпухина Елизавета', 'Карпухина Елизавета', 'Карпухина Елизавета'],
        unPaid: ['Карпухина Елизавета', 'Карпухина Елизавета']
      },
      ...event
    };
  }
}
</script>
