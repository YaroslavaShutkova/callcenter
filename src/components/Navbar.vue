<template>

<nav id="navbarExample" class="navbar navbar-expand-lg fixed-top navbar-light">
    <div class="container">
        <router-link to="/">
          <a class="navbar-brand logo-image"><img src="../assets/images/logo.png" alt=""></a>
        </router-link>
        <span class="nav-item" v-if="!signComplete">
          <router-link to="/sign-in">
            <button class="btn-outline-sm" type="button">Войти</button> <!-- @click="switchSign('sign-in')" -->
          </router-link>
        </span>

        <ul class="navbar-nav ms-auto navbar-nav-scroll" v-else>
            <li class="nav-item" v-if="!breakCall">
                <router-link to="/step1">
                  <button class="btn-outline-sm" type="button" @click="breakCall=true">Принять звонок</button>
                </router-link>
            </li>
            <li class="nav-item" v-else>
                <router-link to="/">
                  <button class="btn-outline-sm" type="button" @click="breakCall=false">Прервать звонок</button>
                </router-link>
            </li>
            <li class="nav-item">
                <span class="nav-link">{{ email }}</span>
            </li>
            <li class="nav-item">
                <a href="/"><button class="btn-outline-sm" type="button">Выйти</button></a>
            </li>
        </ul>

    </div>
</nav>

<section class="form-1">
    <img class="decoration-star" src="../assets/images/decoration-star.svg" alt="alternative">
    <img class="decoration-star-2" src="../assets/images/decoration-star.svg" alt="alternative">
    <router-view @addUser="email=$event.email, uid=$event.uid, signComplete=$event.complete, userUid=$event.uid, userEmail=$event.email" @addOneCall="fio=$event, us=$event, us2=$event" @addService="service=$event" @endCall="breakCall=$event" @addProvider="provider=$event" :uid="userUid" :email="userEmail" :lastCa="lastCall"></router-view>
</section>

 <!-- <div v-if="callComplete">
 <router-link to="/step2"></router-link>
 <router-view @addCalll="callComplete=true"></router-view>-->

</template>


<script>
import { provide, ref } from 'vue'
export default {
  name: 'Nav',
  data() {
    return {
      show: true,
      signSuccess: false,
      breakCall: false,
      isMainPage: false,
      signComplete: false,
      email: '',
      uid: '',
      fio: '',
      city: ''
    }
  },
  setup() {
    const us = ref('')
    const service = ref('')
    const provider = ref('')
    provide('us', us)
    provide('service', service)
    provide('provider', provider)
    return {
      us, service, provider
    }
  },
  components: {

  },
  methods: {
    switchSign(currentSign) {
      this.sign = currentSign;
    },
    exitCall() {

    }

  }
}


</script>


<style>

section {
  min-height: 100vh;
}

.boxShadow8 {
  width: 100%;
  background: white; 
  margin: 2em auto;
  padding: 2em;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
}


</style>
