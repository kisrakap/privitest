<template>
  <v-container class="p-5 m-2 ">
    
  <div class="outlined border rounded pa-5 h-auto d-flex align-items-center">
    <v-otp-input
      ref="otpInput"
      input-classes="otp-input"
      separator="  "
      :num-inputs="4"
      :should-auto-focus="true"
      :is-input-num="true"
      :conditionalClass="['one', 'two', 'three', 'four']"
      :placeholder="['*', '*', '*', '*']"
      @on-change="handleOnChange"
      @on-complete="handleOnComplete"
    />
  </div>
      
      <v-btn
        color="primary"
        class="mx-auto "
        @click="submitOtp"
      >
        Login
      </v-btn>
  </v-container>
</template>
<script>
  import axios from 'axios'
  export default {
    data: () => ({
      checkbox: false,
      otpcode: ''
    }),
    created() {
    },
    computed: {
      user(){
        return this.$store.state.user
      }
    },
    methods: {
      async submitOtp () {
        // this.$refs.f÷orm.resetValidation()
        localStorage.clear()
        try {
          let {data} = await axios.post('http://pretest-qa.dcidev.id/api/v1/register/otp/match', {
            user_id: this.user.id,
            otp_code: this.otpcode
          })
              localStorage.setItem('access_token',data.data.user.access_token )
              localStorage.setItem('token_type',data.data.user.token_type )
              this.$router.push('/userpage')
              
        } catch (error) {
            console.log(error.response)
        }
      },
      handleOnChange(value) {
        console.log(value, "ini change");
      },
      handleOnComplete(value){
        this.otpcode = value 
      }
    },
  }
</script>
<style>
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
/* Background colour of an input field with value */
.otp-input.is-complete {
  background-color: #e4e4e4;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  margin: 0;
}
input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}
</style>