<template>

  <input name="city" list="cities" type="text" class="form-control mb-3" placeholder="Выбор города..." @input="takeCity">
      <datalist id="cities">
        <option value="Москва" />
        <option value="Санкт-Петербург" />
        <option value="Воронеж" />
        <option value="Владивосток" />
        <option value="Красноярск" />
        <option value="Сочи" />
      </datalist>
  <div id="message" class="form-group">
    <p>Адрес абонента</p>
    <form id="gitAddress">  <!--- подключить из классификатора -->
      <!--
      <input class="form-control mb-3" id="gitCode" value=""  @input="takeKladr" />
      <input class="form-control mb-3" id="gitPost" value=""  @input="takeInd" />
      <button class="form-group btn-solid-reg" type="button" >ОК</button>  --> <!-- @click="takeAdr" -->
    </form>
    <br>
  </div>


</template>

<script>

export default {
  name: 'address',
  data() {
    return {
      kl: '',
      ind: '',
      ci: '',
    }
  },
  methods: {
    takeKladr(event) {
      this.kl = event.target.value;
      this.$emit('kladrChange', this.kl);
    },
    takeInd(event) {
      this.ind = event.target.value;
      this.$emit('indChange', this.ind);
    },
    takeCity(event) {
      this.ci = event.target.value;
      this.$emit('cityChange', this.ci);
    }

  }
}

</script>

<style>

#message {
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2),0 1px 1px 0 rgba(0,0,0,0.14),0 2px 1px -1px rgba(0,0,0,0.12);
  border-radius: 2px;
  background: white;
  padding: 16px 24px;
}


#message ul {
  list-style: none;
  margin: 16px 0 0;
  padding: 0;
  text-align: center;
}

#message li a {
  display: inline-block;
  padding: 8px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 500;
  background: rgb(3,155,229);
  color: white;
  border: 1px solid rgb(3,155,229);
  border-radius: 3px;
  font-size: 14px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
}

#gitAddress input { width: 100px; }
#gitAddress select { width: 150px; }

</style>
