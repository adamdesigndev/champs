<template>
    <div class="food-item-card">
      <img :src="item.image" :alt="item.name">
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
      <p v-if="item.price">Price: ${{ item.price }}</p>
      <p v-if="item.sizes">Starting at: ${{ Math.min(...Object.values(item.sizes)) }}</p>
      <button @click="addToCart(item)">Add to Cart</button>
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
    border: 1px solid #ddd;
    padding: 1rem;
    text-align: center;
  }
  
  .food-item-card img {
    width: 100%;
    max-width: 200px;
  }
  
  .food-item-card button {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  </style>