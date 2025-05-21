import { createStore } from 'vuex';
import moduleBase from './modules/base';

export default createStore({
  modules: {
    base: moduleBase,
  },
});
