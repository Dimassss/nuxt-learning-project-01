import { AuthUser } from '@/assets/js/model/AuthUser';

export const state = () => ({
  user: null,
});

export const mutations = {
  setUser(state, user){
    state.user = Object.assign({}, new AuthUser(user));
  }
};

export const getters = {
  user(state){
    return new AuthUser(state.user);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters
};
