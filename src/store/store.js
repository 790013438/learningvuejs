import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => (state.counter * 2),
    clickString: state => `${state.counter} Clicks`
  },
  mutations: {
    increase: (state, by) => {
      state.counter += by;
    },
    decrease: state => {state.counter--}
  },
  actions: {
    increase: (context) => {
      context.commit('increase');
    },
    decrease: ({commit}) => {
      commit('decrease');
    },
    asycnIncrease: ({commit}, by) => {
      setTimeout(function() {
        commit('increase', by)
      },1000);
    },
    asycnDecrease: ({commit}) => {
      setTimeout(()=> {
        commit('decrease');
      }, 1000);
    }
  }
})
