import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions';
import mutations from './mutations';

// for running vue dev tools
Vue.config.devtools = true
Vue.use(Vuex)

export const initialState = () => ({
  userList: {},
})


export default new Vuex.Store({
  strict: false,
  state : initialState,
  mutations: mutations,
  actions: actions,
})
