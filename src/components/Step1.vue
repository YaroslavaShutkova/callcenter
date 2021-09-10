<template>

    <div class="container">
        <div class="row">

          <div class="col-lg-6">
            <h3>Новое обращение:</h3>
            <div class="boxShadow8">
            <form>
              <input type="text" class="form-control mb-3" placeholder="ФИО" v-model='fio'>
              <Address @kladrChange="kladr=$event" @indChange="ind=$event" @cityChange="city=$event"/>
              <input type="text" class="form-control mb-3" placeholder="Контактные телефоны" v-model='tel'>
              <input name="reason" list="reasons" type="text" class="form-control mb-3" placeholder="Причина обращения" v-model='reason'>
                <datalist id="reasons">
                  <option value="Причина 1" />
                  <option value="Причина 2" />
                  <option value="Причина 3" />
                  <option value="Причина 4" />
                </datalist>
              <textarea class="form-control textarea mb-3" placeholder="Комментарий" v-model='comment'></textarea>
              <div class="form-group">
                  <button class="form-control-submit-button" type="button" @click.prevent="addCall">Подобрать услуги</button>
              </div>
            <!--  <span class="ml-4">{{ email }} {{ uid }}</span> -->
            </form>
          </div>
          </div>


          <ScriptTalk />

    </div>
  </div>


</template>

<script>
import firebase from "firebase/app";
import Address from './Address.vue'
import ScriptTalk from './ScriptTalk.vue'

export default {
  name: 'Step1',
  data() {
    return {
      fio: '',
      city: '',
      kladr: '',
      ind: '',
      tel: '',
      reason: '',
      comment: '',
      callComplete: false,
      data: {
        calls: []
      }
    }
  },
  components: {
    Address, ScriptTalk
  },
  props: ['uid', 'email'],
  computed: {
    lastCall () {
      return this.data.calls[this.data.calls.length - 1]
    }
  },
  methods: {
    addCall() {
      if(this.fio) {
        this.data.calls.push([this.fio, this.city, this.tel, this.reason, this.comment]);
      }
      firebase.database().ref('users/' + this.uid).set({
        data: this.data
      });
      this.infoCall = [this.fio, this.city, this.tel, this.reason, this.comment];
      this.$emit('addOneCall', this.infoCall);
      this.fio = '';
      this.kladr = '';
      this.ind = '';
      //this.address = '';
      this.tel = '';
      this.reason = '';
      this.comment = '';
      this.callComplete = true;
      this.$router.push('/step2')
    }
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
