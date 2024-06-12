<template>
    <nav class="menu-navigation">
      <ul>
        <li v-for="category in categories" :key="category" @click="selectCategory(category)">
          {{ category }}
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const categories = ref(['Chicken', 'Burger', 'Pizza', 'Drinks']); // Add your categories here
  const selectedCategory = ref(null);
  
  const selectCategory = (category) => {
    selectedCategory.value = category;
    // Emit event to parent component to update the selected category
    emit('update-category', category);
  };
  
  const emit = defineEmits(['update-category']);
  </script>
  
  <style scoped>
  .menu-navigation ul {
    display: flex;
    list-style: none;
    padding: 0;
  }
  
  .menu-navigation li {
    margin: 0 1rem;
    cursor: pointer;
    color: var(--primary-color);
  }
  
  .menu-navigation li:hover {
    text-decoration: underline;
  }
  </style>