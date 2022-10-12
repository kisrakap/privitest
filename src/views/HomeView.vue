<template>
  <v-container class="pa-5 ma-auto">
    <Login />
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Login from '../components/Login.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    Login
},
});
</script>
