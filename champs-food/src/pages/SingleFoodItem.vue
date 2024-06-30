<!-- SingleFoodItem.vue(Page) -->
<template>
  <div v-if="item">
    <SingleFoodItem :item="item" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import SingleFoodItem from '../components/SingleFoodItem.vue';
import { foodItems } from '../data';

const route = useRoute();
const item = ref(null);

onMounted(() => {
  item.value = foodItems.find(foodItem => foodItem.name === route.params.name);
});
</script>