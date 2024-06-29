<!-- MenuNavigation.vue -->
<template>
  <h1 class="header-2">Menu</h1>
    <nav class="">
      <ul class="menu-navigation">
       <li
       @click="selectCategory('Featured')"
       >Fatured</li>
       <li
       @click="selectCategory('Sandwich')"
       >Sandwiches</li>
       <li
       @click="selectCategory('Side')"
       >Sides</li>
       <li
       @click="selectCategory('Salad')"
       >Salads</li>
       <li
       @click="selectCategory('Breakfast')"
       >Breakfast</li>
       <li
       @click="selectCategory('Bevarage')"
       >Drinks</li>
       <li
        @click="selectCategory('Dessert')"
       >Desserts</li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const categories = ref(['Featured', 'Sandwich', 'Side', 'Salad', 'Breakfast', 'Beverage', 'Dessert']); 
  const selectedCategory = ref(null);
  
  const selectCategory = (category) => {
    selectedCategory.value = category;
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