import axios from 'axios';

const baseUrl = 'http://localhost:8080';

const products = {
  namespaced: true,
  state: () => ({
    list: [],
  }),
  /* eslint-disable no-param-reassign */
  mutations: {
    SET_LIST: (state, cases) => {
      state.list = cases;
    },
  },
  /* eslint-enable no-param-reassign */
  actions: {
    async fetch({ commit }) {
      const fetchedProducts = await axios.get(`${baseUrl}/products`);
      commit('SET_LIST', fetchedProducts.data);
      return fetchedProducts.data;
    },
  },
  getters: {
    list: (state) => state.list,
  },
};

export default products;
