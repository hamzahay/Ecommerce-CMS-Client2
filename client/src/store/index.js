import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
// import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: false,
    addStatus: false,
    updateStatus: false,
    products: [],
    formData: {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    },
    id: ''
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
        state.updateStatus = false
        state.formData.name = ''
        state.formData.image_url = ''
        state.formData.price = ''
        state.formData.stock = ''
      }
    },
    changeUpdateStatus (state, payload) {
      state.updateStatus = true
      state.addStatus = true
      state.formData = payload
    },
    updateProducts (state, payload) {
      state.products = payload
    },
    updateFormData (state, payload) {
      state.formData = payload
    },
    changeId (state, id) {
      state.id = id
    }
  },
  actions: {
    auth (context, payload) {
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
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      const addValue = context.state.formData
      return axios({
        method: 'POST',
        url: 'products',
        headers: { access_token: localStorage.access_token },
        data: addValue
      })
        .then(({ data }) => {
          context.commit('changeAddStatus')
          context.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProducts (context, payload) {
      axios({
        method: 'GET',
        url: 'products',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('updateProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProduct (context, payload) {
      const addValue = context.state.formData
      axios({
        method: 'PUT',
        url: `products/${context.state.id}`,
        headers: { access_token: localStorage.access_token },
        data: addValue
      })
        .then(({ data }) => {
          context.commit('changeId', '')
          context.commit('changeAddStatus')
          context.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, payload) {
      axios({
        method: 'DELETE',
        url: `products/${context.state.id}`,
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('changeId', '')
          context.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
