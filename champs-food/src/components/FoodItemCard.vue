<template>
    <div class="food-item-card">
      <img src="/images/grilledClub_colbyJack_PDP.png" :alt="item.name">
      <h4 class="header-4">{{ item.name }}</h4>
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
    background-color: var(--clr-accent-creme);
    min-width: 300px;
  }
  
  .food-item-card img {
    width: 100%;
    max-width: 200px;
    margin-inline: auto;
    margin-bottom: 2rem;
  }
  
  .food-item-card button {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  </style>