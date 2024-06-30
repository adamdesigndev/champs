<!-- FoodItemsList.vue -->
<template>
  <h2 class="header-3">{{ selectedCategory || 'Menu' }}</h2>
    <section class="food-items-list">
      <FoodItemCard v-for="item in filteredItems" :key="item.name" :item="item" />
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import FoodItemCard from './FoodItemCard.vue';
  import { foodItems } from '../data';
  
  const props = defineProps({
    selectedCategory: String
  });
  
  const filteredItems = computed(() => {
    if(props.selectedCategory === 'FEATURED') {
      return foodItems.filter(item => item.featured);
    }
    return props.selectedCategory
      ? foodItems.filter(item => item.category === props.selectedCategory)
      : foodItems;
  });
  </script>
  
  <style scoped>
  .food-items-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
  </style>