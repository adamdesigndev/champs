<!-- FoodItemCard.vue -->
<template>
  <div class="food-item-card fade-in-up" :style="{ animationDelay: `${delay}s` }">
    <router-link :to="{ name: 'SingleFoodItem', params: { name: item.name } }">
      <img :src="item.image" :alt="item.name">
      <h6 class="header-6">{{ item.name }}</h6>
      <p v-if="item.price">${{ item.price }}</p>
      <p v-if="item.sizes">${{ Math.min(...Object.values(item.sizes)) }}</p>
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  item: Object,
  delay: Number
});

const isLoaded = ref(false);

onMounted(() => {
  isLoaded.value = true;
});
</script>

<style scoped>
.food-item-card {
  border-radius: 15px;
  padding: 1rem;
  min-width: 200px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 300px;
  text-align: center;
  opacity: 0; /* Initially hide the card */
  transform: translateY(20px); /* Slide from bottom */
}

.food-item-card:hover {
  background-color: var(--clr-accent-creme);
  filter: drop-shadow(4px 4px 5px rgba(0,0,0,0.3));
}

.food-item-card img {
  max-height: 150px;
  margin-inline: auto;
  margin-bottom: 2rem;
}

/* Fade-in and slide-up animation */
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
  animation: fadeInUp 0.6s ease-out forwards;
}
</style>
