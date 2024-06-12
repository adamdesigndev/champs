<template>
    <div class="single-food-item">
      <img :src="item.image" :alt="item.name">
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
      <label v-if="item.sizes">Size:
        <select v-model="selectedSize">
          <option v-for="(price, size) in item.sizes" :key="size" :value="size">{{ size }} - ${{ price }}</option>
        </select>
      </label>
      <button @click="addToCart(item)">Add to Cart</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    item: Object
  });
  
  const selectedSize = ref(Object.keys(props.item.sizes)[0]);
  
  const addToCart = (item) => {
    console.log('Adding to cart', { item, size: selectedSize.value }); // Temporary for development, replace with actual cart logic
  };
  </script>
  
  <style scoped>
  .single-food-item {
    padding: 1rem;
  }
  
  .single-food-item img {
    width: 100%;
    max-width: 400px;
  }
  
  .single-food-item button {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-top: 1rem;
  }
  </style>