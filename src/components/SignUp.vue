<template>
  <h2>Регистрация</h2>
  <form class="mt-5" @submit.prevent="registerUser">
    <div class="form-group">
      <label for="email">Ваш email:</label>
      <input type="email" class="form-control" id="email" placeholder="Введите email:" required v-model="user.email">
    </div>
    <div class="form-group">
      <label for="password">Ваш пароль (минимум 6 символов):</label>
      <input type="password" class="form-control" id="password" placeholder="Введите пароль:" required v-model="user.password">
    </div>
    <div class="form-group">
      <label for="password2">Повторите пароль:</label>
      <input type="password" class="form-control" id="password2" placeholder="Повторите пароль:" required v-model="user.confirm">
    </div>
    <div class="alert alert-danger" role="alert" v-if="error">
      <strong>Упс!</strong> Пароли не совпадают или вы забыли их ввести.
    </div>
    <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
  </form>

</template>

<script>
import firebase from "firebase/app";

export default {
  name: 'sign-up',
  data() {
    return {
      user: {
        email: '',
        password: '',
        confirm: ''
      },
      error: false
    }
  },
  methods: {
    registerUser() {
      if (this.user.password !== this.user.confirm || this.user.password.length < 6) {
        this.error = true;
      } else {
        firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
          .then (() => {
            this.$emit('regSuccess', 'sign-in');
          })
          .catch( error => {
            console.log(error);
          })
      }
    }
  }
}

</script>
