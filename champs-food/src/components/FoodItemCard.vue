<!-- FoodItemCard.vue -->
<template>
  <!-- Food item card container -->
  <div class="food-item-card">
    <!-- Router link to navigate to the single food item page -->
    <router-link :to="{ name: 'SingleFoodItem', params: { name: item.name } }">
      <!-- Food item image -->
      <img :src="item.images.small" :alt="item.name">
<<<<<<< HEAD
      <!-- Food item name -->
      <h6 class="header-6">{{ item.name }}</h6>
      <!-- Food item price (single price or minimum price from sizes) -->
      <p v-if="item.price">${{ item.price }}</p>
      <p v-if="item.sizes">${{ Math.min(...Object.values(item.sizes)) }}</p>
=======
      <h6 class="header-6 menu-card-name">{{ item.name }}</h6>
      <p class="menu-card-price" v-if="item.price">${{ item.price }}</p>
      <p class="menu-card-price" v-if="item.sizes">${{ Math.min(...Object.values(item.sizes)) }}</p>
>>>>>>> Main-New
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Define props for the component
const props = defineProps({
  item: Object
});

// State variable to track if the component is loaded
const isLoaded = ref(false);

// Lifecycle hook to set isLoaded to true when the component is mounted
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
  align-items: center;
  min-height: 275px;
  text-align: center;
  opacity: 1; /* Ensure the card stays visible */
  transform: translateY(0); /* Ensure the card stays in place */
}

.food-item-card:hover {
  background-color: var(--clr-accent-creme);
  filter: drop-shadow(4px 4px 5px rgba(0,0,0,0.3));
}

.food-item-card img {
  margin-inline: auto;
  margin-bottom: 1rem;
}

@media (width < 570px) {
  .food-item-card {
  padding: 0rem;
  min-width: 0px;
  min-height: 170px;
}

.food-item-card img {
  max-height: 80px;
  margin-bottom: .3rem;
}


  .food-item-card:hover {
  background-color: rgba(0,0,0,0);
  filter: none;
}

.menu-card-name {
  max-width: 200px;
  text-align: center;
}

.menu-card-price {
  font-size: var(--fs-300);
}
}
</style>
