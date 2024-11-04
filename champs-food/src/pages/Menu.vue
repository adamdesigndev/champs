<!-- Menu.vue -->
<template>
  <div class="wrapper-menu-outer-section">
    <div class="wrapper-general">
      <div class="with-sidebar">
        <!-- Sidebar navigation for menu categories -->
        <aside class="sidebar">
          <MenuNavigation @update-category="updateCategory" />
        </aside>

        <!-- Main section displaying list of food items based on selected category -->
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

// State for the currently selected menu category
const selectedCategory = ref('FEATURED');

/**
 * Updates the selected category based on user choice
 * @param {String} category - New category to display items for
 */
const updateCategory = (category) => {
  selectedCategory.value = category;
}
</script>