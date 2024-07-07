<!-- MenuNavigation.vue -->
<template>
  <h1 class="header-2">Menu</h1>
  <nav>
    <ul class="menu-navigation">
      <li
        v-for="category in categories"
        :key="category"
        :class="{ active: category === selectedCategory }"
        @click="selectCategory(category)"
      >
        {{ category }}
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const categories = ref(['FEATURED', 'ENTRÉES', 'SIDES', 'SALADS', 'BREAKFAST', 'DRINKS', 'DESSERTS']); 
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
  gap: 1.5rem;
}

.menu-navigation li {
  cursor: pointer;
  border-bottom: 2px solid rgba(0,0,0,0);
  font-weight: normal;
  color: #828282;
}

.menu-navigation li:hover {
  border-bottom: 2px solid var(--clr-primary);
}

.menu-navigation li.active {
  border-bottom: 2px solid var(--clr-primary);
  font-weight: 600;
  color: var(--clr-body);
}


@media (width < 850px) {
  .menu-navigation {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
}
</style>
