const state = {
  counter: 0
}
const getters = {
  doubleCounter: state => (state.counter * 2),
  clickString: state => `${state.counter} Clicks`,
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
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
