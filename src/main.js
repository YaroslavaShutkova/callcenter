import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
//import router from './router'

import firebase from "firebase/app";
import "firebase/auth";
//import "firebase/firestore";
import "firebase/database";
import "firebase/messaging";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBtk3dJ1K5Q0qYRjWujX6ThYoaIHbRWemE",
  authDomain: "callcenter-2a2d5.firebaseapp.com",
  databaseURL: "https://callcenter-2a2d5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "callcenter-2a2d5",
  storageBucket: "callcenter-2a2d5.appspot.com",
  messagingSenderId: "954500527185",
  appId: "1:954500527185:web:905d4b999521b43b53b470"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);


export default firebase;

//createApp(App).mount('#app')

import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'
import Step1 from './components/Step1.vue'
import Step2 from './components/Step2.vue'
import Step3 from './components/Step3.vue'
import Start from './components/Start.vue'
import PageNotFound from './components/PageNotFound.vue'

import store from './vuex/store'


const routes = [
    { path: '/step1', component: Step1, meta: {auth: true} },
    { path: '/step2', component: Step2, meta: {auth: true} },
    { path: '/step3', component: Step3, meta: {auth: true} },
    { path: '/sign-in', component: SignIn },
    { path: '/sign-up', component: SignUp },
    { path: '/', component: Start, meta: {auth: true} },
    { path: "/:catchAll(.*)", component: PageNotFound }

]


const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
})


router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)
  if (requireAuth && !currentUser) {
    next('/sign-in')
  } else {
    next()
  }
})


let app

firebase.auth().onAuthStateChanged( ()=> {
  if (!app) {
    app = createApp(App)
    app.use(router)
    app.use(store)
    app.mount('#app')
  }
})
