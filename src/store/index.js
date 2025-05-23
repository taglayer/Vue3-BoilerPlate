import { createStore } from 'vuex';
import moduleProducts from './modules/products';

export default createStore({
  modules: {
    products: moduleProducts,
  },
  namespaced: true,
});
