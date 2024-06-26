<template>
    <div class="food-item-card">
      <img src="/images/grilledClub_colbyJack_PDP.png" :alt="item.name">
      <h6 class="header-6">{{ item.name }}</h6>
      <p v-if="item.price">${{ item.price }}</p>
      <p v-if="item.sizes">${{ Math.min(...Object.values(item.sizes)) }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    item: Object
  });
  
  const cart = ref([]);
  
  const addToCart = (item) => {
    cart.value.push(item);
    console.log(cart.value); // Temporary for development, replace with actual cart handling
  };
  </script>
  
  <style scoped>
  .food-item-card {
    border-radius: 15px;
    padding: 1rem;
    min-width: 200px;
    cursor: pointer;
  }

  .food-item-card:hover {
    background-color: var(--clr-accent-creme);
    filter: drop-shadow(4px 4px 5px rgba(0,0,0,0.3));
  }
  
  .food-item-card img {
    width: 100%;
    max-width: 200px;
    margin-inline: auto;
    margin-bottom: 2rem;
  }
  </style>