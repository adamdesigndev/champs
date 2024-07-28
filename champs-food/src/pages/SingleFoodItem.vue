<!-- SingleFoodItem.vue (Page) -->
<template>
  <!-- Conditional rendering to display the single food item if it exists -->
  <div v-if="item">
    <SingleFoodItem :item="item" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import SingleFoodItem from '../components/SingleFoodItem.vue';
import { foodItems } from '../data';

// Get the current route
const route = useRoute();
// Ref to store the current food item
const item = ref(null);

// Lifecycle hook to find and set the food item based on the route parameter
onMounted(() => {
  item.value = foodItems.find(foodItem => foodItem.name === route.params.name);
});
</script>
