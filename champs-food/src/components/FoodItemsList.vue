<!-- FoodItemsList.vue -->
<template>
  <h2 class="header-3 fade-in-down" ref="header" :class="{ animate: initialLoad }" :style="{ animationDelay: `${headerDelay}s` }">
    {{ selectedCategory || 'Menu' }}
  </h2>
  <section class="food-items-list fade-in-up" ref="foodList" :class="{ animate: initialLoad || isLoaded }" :style="{ animationDelay: `${initialLoad ? 0.3 : 0}s` }">
    <FoodItemCard 
      v-for="item in filteredItems" 
      :key="`${item.name}-${selectedCategory}`" 
      :item="item" 
    />
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import FoodItemCard from './FoodItemCard.vue';
import { foodItems } from '../data';

const props = defineProps({
  selectedCategory: String
});

const filteredItems = computed(() => {
  if (props.selectedCategory === 'FEATURED') {
    return foodItems.filter(item => item.featured);
  }
  return props.selectedCategory
    ? foodItems.filter(item => item.category === props.selectedCategory)
    : foodItems;
});

const initialLoad = ref(true);
const isLoaded = ref(false);
const headerDelay = ref(0);

onMounted(() => {
  if (initialLoad.value) {
    headerDelay.value = 0.3; // Set the delay for the initial load
    setTimeout(() => {
      document.querySelector('.fade-in-down').classList.add('animate');
      document.querySelector('.fade-in-up').classList.add('animate');
      isLoaded.value = true;
    }, 100); // Delay before starting the animation
  }
});

watch(() => props.selectedCategory, () => {
  initialLoad.value = false;
  isLoaded.value = false;
  setTimeout(() => {
    isLoaded.value = true;
  }, 0); // Ensure the class is added again on category change
});
</script>

<style scoped>
.food-items-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  opacity: 0; /* Initially hide the list */
  transform: translateY(20px); /* Slide from bottom */
}

/* Slide-down fade-in animation */
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-down {
  opacity: 0;
  transform: translateY(-20px);
}

.animate.fade-in-down {
  animation: fadeInDown 0.2s ease-out forwards;
}

/* Slide-up fade-in animation */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
}

.animate.fade-in-up {
  animation: fadeInUp 0.2s ease-out forwards;
}
</style>

