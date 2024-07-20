<!-- FoodItemCard.vue -->
<template>
  <div class="food-item-card">
    <router-link :to="{ name: 'SingleFoodItem', params: { name: item.name } }">
      <img :src="item.images.small" :alt="item.name">
      <h6 class="header-6">{{ item.name }}</h6>
      <p v-if="item.price">${{ item.price }}</p>
      <p v-if="item.sizes">${{ Math.min(...Object.values(item.sizes)) }}</p>
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  item: Object
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
  min-width: 200px;
  min-height: 250px;
}

.food-item-card img {
  margin-bottom: .3rem;
}


  .food-item-card:hover {
  background-color: rgba(0,0,0,0);
  filter: none;
}
}
</style>
