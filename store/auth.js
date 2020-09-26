import { AuthUser } from '@/assets/js/model/AuthUser';

export const state = () => ({
  user: null,
});

export const mutations = {
  setUser(state, user){
    state.user = new AuthUser(user);
  }
};

export const getters = {
  user(state){
    return state.user;
  }
};

export const auth = {
  namespaced: true,
  state,
  mutations,
  getters
};
