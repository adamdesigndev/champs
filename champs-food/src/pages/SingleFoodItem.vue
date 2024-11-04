<!-- SingleFoodItem.vue (Page) -->
<template>
  <!-- Displays the single food item if it is found -->
  <div v-if="item">
    <SingleFoodItem :item="item" />
  </div>
</template>

<script setup>
// Import necessary functions, components, and data
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import SingleFoodItem from '../components/SingleFoodItem.vue';
import { foodItems } from '../data';

// Reactive reference to store the current food item data
const item = ref(null);

// Access the route to retrieve the food item name from route params
const route = useRoute();

/**
 * onMounted lifecycle hook
 * Finds and sets the food item based on the route parameter `name`
 */
onMounted(() => {
  item.value = foodItems.find(foodItem => foodItem.name === route.params.name);
});
</script>