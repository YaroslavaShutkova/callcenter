<template>

    <div class="container">
        <div class="row">

            <div class="col-lg-6">
                <h3>Сводная информация по заявке:</h3>
                <div class="boxShadow8">
                  <form>
                    <div class="form-group">Данные клиента: {{ us }}</div>
                    <div class="form-group">
                      <p>Заявка на подключение:</p>
                      <p>Провайдер: {{ provider }}</p>
                      <p>Тарифный план: {{ service }}</p>
                    </div>
                    <!--
                      <ul>
                        <li v-for="item in us" :key="item">{{ item }}</li>
                      </ul> -->
                    <br>
                    <div class="form-group">
                      <router-link to="/">
                          <button class="form-control-submit-button" type="button" @click="endCall">Завершить заявку</button>
                      </router-link>
                    </div>
                  </form>
                </div>

                <!--
                <ol class="mt-5">
                  <li v-for="(call) in data.calls" :key="call">{{ call }}</li>
                </ol>
                -->
            </div>

          <ScriptTalk />

    </div>
  </div>


</template>

<script>
import ScriptTalk from './ScriptTalk.vue'
export default {
  name: 'Step3',
  data() {
      return {
        fio: ''
      }
  },
  components: {
      ScriptTalk
  },
  methods: {
    endCall () {
      this.$emit('endCall', false);
      }
  },
  props: ['uid', 'email'],
  inject: ['us', 'service', 'provider'],
}

</script>
