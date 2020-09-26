<template>
  <v-app-bar
    :clipped-left="true"
    fixed
    app
    dark
    color="grey darken-3"
  >
    <v-app-bar-nav-icon @click.stop="$emit('showNavBarHandler')" />
    <v-toolbar-title v-text="title" />
    <v-spacer />
    <v-btn
      large
      to='/profile'
      v-if="fullName !== null"
    >
      <v-icon class="pa-2">mdi-account-circle</v-icon>
       {{fullName}}
    </v-btn>
  </v-app-bar>
</template>

<script>

export default {
  props: {
    showNavBar: Boolean
  },
  data () {
    return {
      title: 'Wegym'
    }
  },
  computed: {
    fullName: function(){
      const user = JSON.parse(JSON.stringify(this.$store.state.auth.user));

      if(!user) return null;
      return `${user.lastName} ${user.firstName}`;
    }
  }
};
</script>
