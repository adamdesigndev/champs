<template>
    <SingleFoodItem :item="item" />
  </template>
  
  <script setup>
  import SingleFoodItem from '../components/SingleFoodItem.vue';
  import { foodItems } from '../data';
  
  const item = foodItems.find(item => item.name === 'Chicken Tender'); // Sample data, replace with dynamic data fetching
  </script>