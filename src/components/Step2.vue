<template>

    <div class="container">
        <div class="row">
            <div class="col-lg-6">
              <h3>Подбор предложений:</h3>

                <div class="boxShadow8">
                  <Catalog @provChange="provider=$event" @tarChange="service=$event"/>
                  <form>
                    <div class="form-group">
                      <router-link to="/step3">
                          <button class="form-control-submit-button" type="button" @click="addServices">Подтвердить заявку</button>
                      </router-link>
                    </div>
                  </form>
                </div>
            </div>

            <ScriptTalk />
    </div>
  </div>


</template>

<script>
import Catalog from './Catalog.vue'
import ScriptTalk from './ScriptTalk.vue'

export default {
  name: 'Step2',
  data() {
      return {
        fio: '',
        city: '',
        service: '',
        provider: ''
      }
    },
  components: {
    Catalog, ScriptTalk
  },

  methods: {
    addServices () {
      this.$emit('addService', this.service);
      this.$emit('addProvider', this.provider);
    }

  }
}

</script>
