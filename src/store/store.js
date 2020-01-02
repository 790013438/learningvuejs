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
    increase: (state, payload) => {
      if(payload) {
        state.counter += payload;
      } else {
        state.counter++;
      }
    },
    decrease: (state, payload) => {
      if (payload) {
        state.counter -= Number(payload);
      } else {
        state.counter--;
      }
    }
  },
  actions: {
    increase: (context, payload) => {
      context.commit('increase', payload);
    },
    decrease: ({commit}) => {
      commit('decrease');
    },
    asycnIncrease: ({commit}, payload) => {
      setTimeout(function() {
        commit('increase', payload.by)
      }, payload.timeout);
    },
    asycnDecrease: ({commit}, payload) => {
      setTimeout(()=> {
        commit('decrease', payload.by);
      }, payload.timeout);
    }
  }
})
