<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-btn
          @click="$refs.calendar.prev()"
          outlined
          fab
          small
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-btn
          @click="$refs.calendar.next()"
          class="ml-4"
          outlined
          fab
          small
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="3">
        <v-select
          :items="studios"
          label="Выберите студию"
          class="ma-0 pa-1"
        ></v-select>
      </v-col>

      <v-col cols="12">
        <v-sheet height="100%">
          <v-calendar
            ref="calendar"
            type="week"
            first-interval="6"
            interval-count="18"
            locale="ru"
            color="lime"
            :interval-height="70"
            :weekdays="[1, 2, 3, 4, 5, 6, 0]"
            :now="time.now"
            :start="time.start"
            :value="time.now"
            :events="events"
            v-model="time.start"
            @click:event="openCurrentEvent($event.event)"
          >

          </v-calendar>
        </v-sheet>
      </v-col>

      <v-btn
				bottom
				color="lime"
				dark
				fab
				fixed
				right
  		>
  			<v-icon>mdi-plus</v-icon>
  		</v-btn>
    </v-row>

    <EventCard
      v-if="currentEvent"
      :event="currentEvent"
      v-on:save="saveEvent($event)"
      v-on:close="currentEvent = null"
    />
  </v-container>
</template>

<script>
import EventCard from '@/components/modal/EventCard';

function getTime(dayOfWeek, time){
  let d = new Date();
  d.setDate(+d.getDate() - d.getDay() + dayOfWeek);

  return `${d.toLocaleDateString().split('.').reverse().join('-')} ${time}`.trim();
}

export default {
  components: {
    EventCard
  },
  data(){
    return {
      currentEvent: null,
      studios: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      time: {
        now: new Date().toLocaleDateString().split('.').reverse().join('-'),
        start: new Date().toLocaleDateString().split('.').reverse().join('-')
      },
      events: [
        {
					id: 1,
          name: 'Weekly Meeting',
          start: getTime(5, '09:00'),
          end: getTime(5, '10:00')
        },
        {
          id: 2,
          name: 'Thomas\' Birthday',
          start: getTime(2, '')
        },
        {
          id: 3,
          name: 'Mash Potatoes',
          start: getTime(3, '12:30'),
          end: getTime(3, '15:30')
        },
        {
          id: 4,
          name: 'Mash Potatoes',
          start: getTime(3, '12:30'),
          end: getTime(3, '16:30')
        }
      ]
    };
  },
  methods: {
    openCurrentEvent(event){
      this.currentEvent = event;
    },
    saveEvent(event){
      this.events = this.events.map(e => e.id == event.id ? event : e);
      this.currentEvent = null;
    }
  }
}
</script>
