<!-- MenuNavigation.vue -->
<template>
  <h1 class="header-2">Menu</h1>
    <nav class="">
      <ul class="menu-navigation">
       <li>Fatured</li>
       <li>Sandwiches</li>
       <li>Sides</li>
       <li>Salads</li>
       <li>Breakfast</li>
       <li>Drinks</li>
       <li>Desserts</li>
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
    cursor: pointer;
    border-bottom: 2px solid rgba(0,0,0,0);
  }
  
  .menu-navigation li:hover {
    border-bottom: 2px solid var(--clr-primary);
  }

  @media (width < 850px) {
    .menu-navigation {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
  
}
  </style>