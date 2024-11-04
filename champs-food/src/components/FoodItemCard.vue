<!-- FoodItemCard.vue -->
<template>
  <div class="food-item-card">
    <!-- Link to individual food item page -->
    <router-link :to="{ name: 'SingleFoodItem', params: { name: item.name } }">
      <!-- Food item image and name -->
      <img :src="item.images.small" :alt="item.name" />
      <h6 class="header-6 menu-card-name">{{ item.name }}</h6>

      <!-- Display item price or minimum price if sizes are available -->
      <p class="menu-card-price" v-if="item.price">${{ item.price }}</p>
      <p class="menu-card-price" v-if="item.sizes">
        ${{ Math.min(...Object.values(item.sizes)) }}
      </p>
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Accepts an `item` object as a prop with details about the food item
const props = defineProps({
  item: Object
});

const isLoaded = ref(false); // Tracks if the component is fully loaded

// Sets `isLoaded` to true on component mount
onMounted(() => {
  isLoaded.value = true;
});
</script>

<style scoped>
/* Styles for the food item card */
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
  opacity: 1;
  transform: translateY(0);
}

/* Hover effect for desktop view */
.food-item-card:hover {
  background-color: var(--clr-accent-creme);
  filter: drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.3));
}

/* Image styling */
.food-item-card img {
  margin-inline: auto;
  margin-bottom: 1rem;
}

/* Responsive styles for smaller screens */
@media (width < 570px) {
  .food-item-card {
    padding: 0;
    min-width: 0;
    min-height: 170px;
  }

  .food-item-card img {
    max-height: 80px;
    margin-bottom: 0.3rem;
  }

  .food-item-card:hover {
    background-color: transparent;
    filter: none;
  }
}

/* Styling for item name and price */
.menu-card-name {
  max-width: 200px;
  text-align: center;
}

.menu-card-price {
  font-size: var(--fs-300);
}
</style>