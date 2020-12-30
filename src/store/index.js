import Vue from 'vue'
import Vuex from 'vuex'
import todos from './quizs'

Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

export default new Vuex.Store({
  modules:{
      todos
  }
})