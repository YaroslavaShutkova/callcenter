<template>

    <div class="container" v-if="show">
        <div class="row">
            <div class="col-lg-6">
                <div class="image-container">
                    <img class="img-fluid" src="../assets/images/contact.png" alt="alternative">
                </div>
            </div>
            <div class="col-lg-6">
                <div class="text-container">
                    <h1>Пожалуйста, войдите в систему, используя логин и пароль</h1>
                    <br>
                    <form @submit.prevent="enterUser">
                        <div class="form-group">
                            <input type="email" id="email" class="form-control-input" placeholder="Введите email:" required v-model="user.email">
                        </div>
                        <div class="form-group">
                            <input type="password" id="password" class="form-control-input" placeholder="Введите пароль:" required v-model="user.password">
                        </div>
                        <button type="submit" class="form-control-submit-button">Войти</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import firebase from "firebase/app";

export default {
  data() {
    return {
      show: true,
      signSuccess: false,
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    enterUser() {
      firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
       .then( response => {
         const sett = {
          email: response.user.email,
          uid: response.user.uid,
          mainPage: true,
          complete: true
         }
         this.$emit('addUser', sett);
         this.show = false;
         this.signSuccess = true;
         this.$router.push('/')
       })
    }
  }
}
</script>
