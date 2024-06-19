<template>
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
    return props.selectedCategory
      ? foodItems.filter(item => item.category === props.selectedCategory)
      : foodItems;
  });
  </script>
  
  <style scoped>
  .food-items-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  </style>