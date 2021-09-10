<template>

<div class="catalog-item">
  <img :src=" require('../assets/images/' + item_data.image) " class="catalog-image" alt="">
  <p class="catalog-item-name">{{ item_data.name }}</p>
  <!-- <p class="catalog-item-content">{{ item_data.it }}</p> -->
  <p class="catalog-item-content">{{ item_data.tarifes.tarifname }}</p>
  <p class="catalog-item-content"
    v-for="tarifes in item_data.tarifes"
    :key="tarifes.tarifname">
    {{ tarifes.tarifname }}
  </p>
</div>

</template>

<script>

  export default {
    name: 'item',
    components: {

    },
    props: {
      item_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {}
    }
  }

</script>

<style>

  .catalog-item {
    flex-basis: 30%;
    background: white;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 8px;
    margin-bottom: 8px;
  }

  .catalog-image {
    width: 100px;
  }


</style>
