<template>
    <section class="cart-list">
      <CartFoodItem v-for="item in cartItems" :key="item.name" :item="item" />
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import CartFoodItem from './CartFoodItem.vue';
  import { foodItems } from '../data';
  
  const cartItems = ref(foodItems.slice(0, 2)); // Sample data, replace with actual cart items logic
  </script>
  
  <style scoped>
  .cart-list {
    padding: 2rem;
  }
  </style>