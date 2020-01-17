import * as types from '../types.js'

const state = {
  counter: 0
}
const getters = {
  [types.DOUBLE_COUNTER]: state => (state.counter * 2),
  [types.CLICK_STRING]: state => `${state.counter} Clicks`,
}
const mutations = {
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
}

const actions = {
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

export default {
  state,
  getters,
  mutations,
  actions
}
