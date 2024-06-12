<template>
    <section class="three-column">
      <div v-for="item in items" :key="item.name" class="column">
        <FoodItemCard :item="item" />
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import FoodItemCard from './FoodItemCard.vue';
  import { foodItems } from '../data';
  
  const items = ref(foodItems.filter(item => item.featured));
  </script>
  
  <style scoped>
  .three-column {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
  }
  
  .column {
    flex: 1;
    margin: 0 1rem;
  }
  </style>