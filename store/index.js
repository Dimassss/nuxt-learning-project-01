import Vue from 'vue';
import Vuex from 'vuex';
import {fillData} from '~/assets/js/data/store.js';
import {auth} from './auth';

Vue.use(Vuex)

const store = (function(){
  let s = new Vuex.Store({
    modules: {
      auth
    }
  });

  return () => s;
})();

fillData(store);

export default store;
