<template>
  <v-container>
    <v-row>
      <v-col
        v-for="coach in coaches"
        :key="coach.id"
        cols="4"
        col-md="6"
        col-sm="12"
      >
        <CoachCard
          :coach="coach"
          v-on:edit="editCoach(coach.id)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapState} from 'vuex';
import CoachCard from '~/components/CoachCard';

export default {
  components: {
    CoachCard
  },
  data(){
    return {};
  },
  computed: {
    ...mapState({
      coaches: state => state.tables.coaches
    })
  },
  methods: {
    editCoach(id){}
  }
}
</script>
