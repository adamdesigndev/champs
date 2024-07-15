<!-- FoodItemsList.vue -->
<template>
  <h2 class="header-3 fade-in-down" ref="header" :class="{ 'initial-animate': initialLoad }" :style="{ animationDelay: `${headerDelay}s` }">
    {{ selectedCategory || 'Menu' }}
  </h2>
  <section class="food-items-list fade-in-up" :class="{ 'initial-animate': initialLoad }">
    <FoodItemCard 
      v-for="(item, index) in filteredItems" 
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
const headerDelay = ref(0);

onMounted(() => {
  if (initialLoad.value) {
    headerDelay.value = .05; // Set the delay for the initial load
    setTimeout(() => {
      document.querySelector('.header-3.initial-animate').classList.add('animate');
      document.querySelector('.food-items-list.initial-animate').classList.add('animate');
    }, 220); // Delay before starting the animation
  }
});

watch(() => props.selectedCategory, () => {
  initialLoad.value = false;
});
</script>

<style scoped>
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
  opacity: 1; /* Ensure the h2 stays visible */
  transform: translateY(0); /* Ensure the h2 stays in place */
}

.initial-animate {
  opacity: 0;
  transform: translateY(-10px);
}

.animate.initial-animate {
  animation: fadeInDown .3s ease-out forwards;
}

/* Slide-up fade-in animation for food items */
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
  opacity: 1; /* Ensure the section stays visible */
  transform: translateY(0); /* Ensure the section stays in place */
}

.initial-animate {
  opacity: 0;
  transform: translateY(20px);
}

.animate.initial-animate {
  animation: fadeInUp .3s ease-out forwards;
}
</style>
