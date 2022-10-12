<template>
  <v-container class="p-5  m-2">
    <v-form
      ref="form"
      v-model="valid"
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
  
    </v-form>
    <v-btn
      color="primary"
      class="mr-4"
      @click="submitLogin"
    >
      Login
    </v-btn>
  </v-container>
</template>
<script>
  import axios from 'axios'
  export default {
    data: () => ({
      valid: true,
      name: '',
      password: '',
      phone: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),

    methods: {
      async submitLogin () {
        localStorage.clear()

        let {data} = await axios.post('http://pretest-qa.dcidev.id/api/v1/oauth/sign_in', {
          phone : '62'+this.phone,
          password : this.password,
          latlong : '103',
          device_token : '123123',
          device_type : 2
        })
            localStorage.setItem('access_token',data.data.user.access_token )
            localStorage.setItem('token_type',data.data.user.token_type )
            this.$router.push('/userpage')

        },
    },
  }
</script>