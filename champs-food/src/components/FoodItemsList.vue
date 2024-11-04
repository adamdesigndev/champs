<!-- FoodItemsList.vue -->
<template>
  <!-- Header showing the selected category or default to 'Menu' -->
  <h2
    class="header-3 fade-in-down"
    ref="header"
    :class="{ 'initial-animate': initialLoad }"
    :style="{ animationDelay: `${headerDelay}s` }"
  >
    {{ selectedCategory || 'Menu' }}
  </h2>
  
  <!-- Section for displaying filtered food items -->
  <section class="food-items-list fade-in-up" :class="{ 'initial-animate': initialLoad }">
    <FoodItemCard 
      v-for="(item, index) in filteredItems" 
      :key="`${item.name}-${selectedCategory}`" 
      :item="item"
    />
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue';
import FoodItemCard from './FoodItemCard.vue';
import { foodItems } from '../data';

// Define selected category as a prop
const props = defineProps({
  selectedCategory: String
});

// Compute filtered items based on the selected category
const filteredItems = computed(() => {
  if (props.selectedCategory === 'FEATURED') {
    return foodItems.filter(item => item.featured);
  }
  return props.selectedCategory
    ? foodItems.filter(item => item.category === props.selectedCategory)
    : foodItems;
});

const initialLoad = ref(true); // Tracks the initial load state for animations
const headerDelay = ref(0); // Sets a delay for header animation

/**
 * Triggers animation for header and food items list
 */
const triggerAnimation = () => {
  headerDelay.value = 0.05; // Initial delay for header animation
  setTimeout(() => {
    const headerElement = document.querySelector('.header-3.initial-animate');
    const listElement = document.querySelector('.food-items-list.initial-animate');

    if (headerElement) {
      headerElement.classList.add('animate');
    }
    if (listElement) {
      listElement.classList.add('animate');
    }
  }, 500); // Animation delay
};

// Initialize animations on component mount
onMounted(() => {
  if (initialLoad.value) {
    triggerAnimation();
  }
});

// Watcher for category changes to re-trigger animations
watch(() => props.selectedCategory, async () => {
  initialLoad.value = false; // Reset animation state
  await nextTick(); // Wait for DOM to update
  initialLoad.value = true; // Re-trigger animation on new category
  triggerAnimation();
});
</script>

<style scoped>
/* Grid layout for food items */
.food-items-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

/* Slide-down fade-in animation for header */
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-down {
  opacity: 1;
  transform: translateY(0);
}

.initial-animate {
  opacity: 0;
  transform: translateY(-10px);
}

.animate.initial-animate {
  animation: fadeInDown 0.3s ease-out forwards;
}

/* Slide-up fade-in animation for food items list */
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
  opacity: 1;
  transform: translateY(0);
}

.initial-animate {
  opacity: 0;
  transform: translateY(20px);
}

.animate.initial-animate {
  animation: fadeInUp 0.3s ease-out forwards;
}
</style>