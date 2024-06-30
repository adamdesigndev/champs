<!-- Menu.vue -->
<template>
    <div class="wrapper-menu-outer-section">
      <div class="wrapper-general">
      <div class="with-sidebar">
        <aside class="sidebar"><MenuNavigation 
          @update-category="updateCategory"/></aside>
        <main class=""><FoodItemsList 
          :selectedCategory="selectedCategory"/></main>
    </div>
  </div>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue';

  import MenuNavigation from '../components/MenuNavigation.vue';
  import FoodItemsList from '../components/FoodItemsList.vue';

  const selectedCategory = ref('FEATURED');

  const updateCategory = (category) => {
    selectedCategory.value = category;
  }
  </script>
  