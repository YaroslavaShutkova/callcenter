<template>


  <Navbar />


<!-- <SignIn v-if="!signComplete"/> -->
<!-- <router-view @addUser="email=$event.email, signComplete=$event.complete, userUid=$event.uid" :uid="userUid" :email="userEmail"></router-view>

<div v-if="callComplete">
<router-link to="/step2"></router-link>
<router-view></router-view>
</div>

<router-link to="/step2">Go to Step2</router-link>
<router-view></router-view>  -->


</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  data() {
    return {
      sign: 'sign-in',
      isMainPage: false,
      signComplete: false,
      email: '',
      uid: ''
    }
  },
  components: {
    Navbar //, SignIn
  },
  methods: {
    switchSign(currentSign) {
      this.sign = currentSign;
    }
  }
}

</script>

<style>


</style>
