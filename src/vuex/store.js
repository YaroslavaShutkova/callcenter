import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state: {
    items: []
  },
  mutations: {
    SET_ITEMS_TO_STATE: (state, items) => {
      state.items = items;
    }
  },
  actions: {
    GET_ITEMS_FROM_API({commit}) {
      return axios('http://localhost:3000/operators', {
      method: "GET"
    })
    .then((items) => {
      commit('SET_ITEMS_TO_STATE', items.data);
      return items;
    })
    .catch((error) => {
      console.log(error)
      return error;
    })
},
  },
  getters: {
    ITEMS(state) {
      return state.items;
    }
  }
});

export default store;

/***

const store = createStore({
  state () {
    return {
      items: []
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

**/
