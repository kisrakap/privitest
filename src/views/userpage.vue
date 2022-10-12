<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data: () => ({
      checkbox: false,
      otpcode: ''
    }),
    mounted() {     
        this.$store.dispatch('fetchdata')
    },
    computed: {
      user(){
        return this.$store.state.user
      }
    },
    methods: {
      
    },
  }
</script>
