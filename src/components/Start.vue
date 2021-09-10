<template>
<div class="container">
    <div class="row">
      <div class="col-lg-12">

          <h3>Тестовая страница</h3>
          <div class="boxShadow8">
            <p>Записи в firebase (с удалением при клике):</p>
            <ol class="mt-5">
              <li v-for="(call, index) in data.calls" :key="call" @click="removeCall(index)">{{ call }}</li>
            </ol>
          </div>

          <!--
          <p>Записи в firebase (без удаления):</p>
          <ol class="mt-5">
            <li v-for="(call) in data.calls" :key="call">{{ call }}</li>
          </ol><br>-->

          <div class="boxShadow8">
            <p>Вывод последнего звонка:</p>
              <ol class="mt-5">
                <li>{{ lastCall }}</li>
              </ol>
          </div>

        </div>
    </div>
</div>

</template>

<script>
import firebase from "firebase/app";


export default {
  name: 'main page',
  data() {
    return {
      data: {
        calls: []
      }
    }
  },
  components: {

  },
  props: ['uid', 'email'],
  computed: {
    lastCall () {
      return this.data.calls[this.data.calls.length - 1]
    }
  },
  methods: {
    removeCall(index) {
      this.data.calls.splice(index, 1);
      firebase.database().ref('users/' + this.uid).set({
        data: this.data
      });
    },
  },
  created() {
    this.data.calls = [];
    const takeCalls = firebase.database().ref('users/' + this.uid + '/data');
    takeCalls.on('value', (snapshot) => {
      if (snapshot.val().calls) {
        this.data = snapshot.val();
      } else {
        this.data.calls =[];
      }
    });
  }
}

</script>

<style>


</style>
