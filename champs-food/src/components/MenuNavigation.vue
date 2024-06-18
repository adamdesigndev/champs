<!-- MenuNavigation.vue -->
<template>
    <nav class="">
      <ul class="menu-navigation">
       <li>Specials</li>
       <li>Specials</li>
       <li>Specials</li>
       <li>Specials</li>
       <li>Specials</li>
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
  .menu-navigation {
    display: flex;
    flex-direction: column;
    gap: 2rem;
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