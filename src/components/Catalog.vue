<template>
  <div class="catalog">
    <div class="catalog-list">
      <Item
        v-for="item in ITEMS"
        :key="item.name"
        :item_data="item"
      />
    </div>
  </div>
<br>
<form>
  <input name="provider" list="providers" type="text" class="form-control mb-3" placeholder="Выбор провайдера..." @input="takeProvider" v-model='prov'>
        <datalist id="providers">
          <option
            v-for="item in ITEMS"
            :key="item.name">
            {{ item.name }}
          </option>
        </datalist>



  <input name="service" list="services" type="text" class="form-control mb-3" placeholder="Выбор тарифа..." @input="takeTarif">
        <datalist id="services">
          <option
            v-for="item in ITEMS"
            :key="item.name">
              <p v-if="item.name === this.prov">
                {{ item.tarifes }}
              </p>
          </option>
        </datalist>

</form>

</template>

<script>
  import Item from './Item.vue'
  import {mapActions, mapGetters} from 'vuex'



  export default {
    name: 'catalog',
    components: {
      Item
    },
    props: {},
    data() {
      return {
        provider: '',
        tarif: '',
        prov: '',
        tars: [],
      }
    },
    computed: {
      ...mapGetters([
        'ITEMS'
      ]),

    },
    methods: {
      ...mapActions([
        'GET_ITEMS_FROM_API'
      ]),

      takeProvider(event) {
        this.provider = event.target.value;
        this.$emit('provChange', this.provider);
      },

      takeTarif(event) {
        this.tarif = event.target.value;
        this.$emit('tarChange', this.tarif);
      },

    },
    mounted() {
      this.GET_ITEMS_FROM_API()
    }
  }


</script>

<style>


  .catalog-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }


</style>
