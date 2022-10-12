<template>
  <v-container class="p-5  m-2">
    <v-form
      ref="form"
      lazy-validation
      class="bg-dark"
    >
      
    <v-text-field
        v-model="phone"
        :rules="[v => !!v || 'Item is required']"
        label="phone"
        required
      ></v-text-field>
  
      <v-text-field
        v-model="password"
        :rules="[v => !!v || 'Item is required']"
        label="Password"
        type="password"
        required
      ></v-text-field >


      <v-text-field
        v-model="country"
        :rules="[v => !!v || 'Item is required']"
        label="Country"
        required
      ></v-text-field>
  
    </v-form>
    <v-btn
      color="primary"
      class="mr-4"
      @click.prevent="submitRegister"
    >
      Register
    </v-btn>
  </v-container>
</template>
<script>
  import axios from 'axios'
  export default {
    data: () => ({
      phone: '',
      password: '',
      country: '',
    }),

    methods: {
      async requestOtp(){
        let {data} = await axios.post('http://pretest-qa.dcidev.id/api/v1/register/otp/request', {
            phone : '62'+this.phone,
          })
          this.$store.dispatch("otp", data.data.user )
      },
      async submitRegister () {
        try {
          let {data} = await axios.post('http://pretest-qa.dcidev.id/api/v1/register', {
            phone : '62'+this.phone,
            password : this.password,
            latlong : '103',
            device_token : '123123',
            device_type : 2,
            country: this.country
          })
              this.$store.dispatch("register", data.data.user )
              this.requestOtp()
              
              this.$router.push('/otp')
        } catch (error) {
          if(error.response.data.error){
            console.log(error.response.data.error.errors[0])
          }
          else {
            console.log(error.response)
          }
        }
        },
    },
  }
</script>