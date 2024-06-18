<template>
    <div class="wrapper-menu-outer-section">
      <div class="wrapper-general">
      <div class="with-sidebar">
        <aside class="sidebar"><MenuNavigation /></aside>
        <main class=""><FoodItemsList /></main>
    </div>
  </div>
    </div>
  </template>
  
  <script setup>
  import MenuNavigation from '../components/MenuNavigation.vue';
  import FoodItemsList from '../components/FoodItemsList.vue';
  </script>