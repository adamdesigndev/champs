<!-- FoodItemsList.vue -->
<template>
  <h2 class="header-3 fade-in-down" ref="header" :class="{ animate: initialLoad }" :style="{ animationDelay: `${headerDelay}s`, opacity: initialLoad ? 0 : 1, transform: initialLoad ? 'translateY(-20px)' : 'translateY(0)' }">
    {{ selectedCategory || 'Menu' }}
  </h2>
<<<<<<< HEAD
  <section class="food-items-list fade-in-up" ref="foodList" :class="{ animate: initialLoad || isLoaded }" :style="{ animationDelay: `${initialLoad ? 0.3 : 0}s` }">
=======
  <section class="food-items-list fade-in-up" :class="{ 'initial-animate': initialLoad }">
>>>>>>> animations
    <FoodItemCard 
      v-for="item in filteredItems" 
      :key="`${item.name}-${selectedCategory}`" 
<<<<<<< HEAD
      :item="item" 
=======
      :item="item"
>>>>>>> animations
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
<<<<<<< HEAD
      document.querySelector('.fade-in-down').classList.add('animate');
      document.querySelector('.fade-in-up').classList.add('animate');
      isLoaded.value = true;
    }, 100); // Delay before starting the animation
=======
      document.querySelector('.header-3.initial-animate').classList.add('animate');
      document.querySelector('.food-items-list.initial-animate').classList.add('animate');
    }, 220); // Delay before starting the animation
>>>>>>> animations
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

/* Slide-down fade-in animation for header */
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
