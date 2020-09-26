<template>
  <v-app>
    <NavBar :showNavBar="showNavBar"/>
    <NavHeader :showNavBar="showNavBar" v-on:showNavBarHandler="showNavBar = !showNavBar"/>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  data () {
    return {
      showNavBar: true
    }
  }
}
</script>
