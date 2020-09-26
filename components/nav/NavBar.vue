<template>
  <v-navigation-drawer
    v-model="showNavBar"
    clipped
    fixed
    app
  >
    <v-list dense>
      <template
        v-for="(section, i) in nav"
      >
        <v-list-item
          v-if="!section.childrens"
          :to="section.href"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon>{{section.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{section.title}}</v-list-item-title>
        </v-list-item>

        <v-list-group
          v-else
          :prepend-icon="section.icon"
          :value='false'
          :key="i"
        >
          <template v-slot:activator>
            <v-list-item-title>{{section.title}}</v-list-item-title>
          </template>

          <v-list-item
            v-for="menu in section.childrens"
            :to="section.href+menu.href"
            :key="menu.href"
          >
            <v-list-item-title v-text="menu.title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {nav} from '@/assets/js/config/app-nav-bar.obj.js';

export default {
  props: {
    showNavBar: Boolean,
  },
  data(){
    return {nav};
  }
};
</script>
