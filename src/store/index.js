import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    user: {},
    access_token: '',
    otpuser: {},
    userProfile: {}
  },
  getters: {
    user: (state) => {
      return state.user
    },
    otpuser: (state) => {
      return state.otpuser
    },
    userProfile: (state) => {
      return state.userProfile
    }
    
  },
  mutations: {
    setLogin(state, payload) {
      state.access_token = payload
    },
    setRegister(state, payload) {
      state.user = payload
    },
    setOtp(state, payload){
      state.otpuser = payload
    },
    setUserProfile(state, payload){
      state.userProfile = payload
    }


  },
  actions: {
    login(context, payload){
      context.commit('SetLogin', payload)

    },
    register(context, payload){
      context.commit('setRegister', payload)
    },
    otp(context, payload){
      context.commit('setOtp', payload)
    },
    async fetchdata(context) {
      console.log('masuk fetch data');
      try {
        let {response} = await fetch('http://pretest-qa.dcidev.id/api/v1/profile/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          }
        })
            console.log(response)
            context.commit('setUserProfile', response.data.data)
      } catch (error) {
          console.log(error)
      }
    }

  }
})
