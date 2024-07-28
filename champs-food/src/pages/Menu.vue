<!-- Menu.vue -->
<template>
  <!-- Outer wrapper for the menu page -->
  <div class="wrapper-menu-outer-section">
    <div class="wrapper-general">
      <div class="with-sidebar">
        <!-- Sidebar containing the menu navigation -->
        <aside class="sidebar">
          <MenuNavigation @update-category="updateCategory" />
        </aside>
        <!-- Main content area displaying the food items list -->
        <main>
          <FoodItemsList :selectedCategory="selectedCategory" />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MenuNavigation from '../components/MenuNavigation.vue';
import FoodItemsList from '../components/FoodItemsList.vue';

// Ref to track the selected category
const selectedCategory = ref('FEATURED');

// Function to update the selected category
const updateCategory = (category) => {
  selectedCategory.value = category;
};
</script>
