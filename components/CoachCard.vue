<template>
  <v-card class="elevation-1">
    <v-card-title>
			<div>
				<v-rating
					:value="coach.rate"
					color="amber"
					dense
					half-increments
					readonly
					size="14"
				></v-rating>
				{{ coach.name }}
			</div>
			<v-spacer/>
			<v-avatar item size="48px">
				<v-img :src="coach.photo"></v-img>
			</v-avatar>
		</v-card-title>
    <v-card-actions>
      <v-btn
        @click="$emit('editCoach')"
        text
      >РЕДАКТИРОВАТЬ</v-btn>
      <v-spacer/>
      <v-btn
        @click="show = !show"
        icon
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider/>
        <v-card-text>
          <div class="subtitle-2">Направления</div>
          <div>
            <template v-for="line in coach.directions">
              <span>{{line}}</span><br/>
            </template>
          </div>

          <div class="subtitle-2">Образование</div>
          <div>
            <template v-for="line in coach.education">
              <span>{{line}}</span><br/>
            </template>
          </div>

          <div class="subtitle-2">Сертификаты и достижения</div>
          <div>
            <template v-for="line in coach.achievements">
              <span>{{line}}</span><br/>
            </template>
          </div>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
/**
coach = {

  name: string,
  photo: string,
  rate: x in [0, 5],
  directions: string[],
  education: string[],
  achievements: string[]
}
*/

export default {
  props: ['coach'],
  data(){
    return {
      show: false
    }
  }
}
</script>
