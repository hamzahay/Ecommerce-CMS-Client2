import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
// import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: false,
    addStatus: false
  },
  mutations: {
    changeLoginStatus (state, payload) {
      state.loginStatus = payload
    },
    changeAddStatus (state, payload) {
      if (state.addStatus === false) {
        state.addStatus = true
      } else {
        state.addStatus = false
      }
    }
  },
  actions: {
    auth (context, payload) {
      console.log('auth on')
      if (!localStorage.access_token) {
        context.commit('changeLoginStatus', false)
      } else {
        context.commit('changeLoginStatus', true)
      }
    },
    login (context, payload) {
      return axios({
        method: 'POST',
        url: 'login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.access_token = data.access_token
          context.dispatch('auth')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      return axios({
        method: 'POST',
        url: 'products',
        headers: { access_token: localStorage.access_token },
        data: payload
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
