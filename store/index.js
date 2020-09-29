import {fillData} from '~/assets/js/data/store.js';

export const store = () => ({});
export const mutations = {};
export const actions = {
  nuxtServerInit({commit}, {req}){
    fillData(commit);
  }
};
export const getters = {};

export default {
  namespaced: true,
  store,
  mutations,
  actions,
  getters
};
