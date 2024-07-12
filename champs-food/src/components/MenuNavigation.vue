<!-- MenuNavigation.vue -->
<template>
  <h1 class="header-2 fade-in-down" ref="header">Menu</h1>
  <nav>
    <ul class="menu-navigation">
      <li
        v-for="(category, index) in categories"
        :key="category"
        :class="{ active: category === selectedCategory, 'fade-in-left': isLoaded }"
        :style="{ animationDelay: isLoaded ? `${0.2 * index + 0.5}s` : '0s' }"
        @click="selectCategory(category)"
        ref="menuItems"
      >
        {{ category }}
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const categories = ref(['FEATURED', 'ENTRÉES', 'SIDES', 'SALADS', 'BREAKFAST', 'DRINKS', 'DESSERTS']); 
const selectedCategory = ref('FEATURED'); // Set initial category to 'FEATURED'
const isLoaded = ref(false);

const selectCategory = (category) => {
  selectedCategory.value = category;
  emit('update-category', category);
};

const emit = defineEmits(['update-category']);
const header = ref(null);
const menuItems = ref([]);

onMounted(() => {
  setTimeout(() => {
    header.value.classList.add('animate');
    isLoaded.value = true;
  }, 500); // Adjust the delay as needed
});
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
  opacity: 0; /* Initially hide the list items */
  transform: translateX(-20px); /* Slide from left */
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
    flex-wrap: wrap;
    gap: 1rem;
  }

  .menu-navigation li {
    font-size: var(--fs-200);
    cursor: pointer;
    border-bottom: 2px solid rgba(0,0,0,0);
    font-weight: normal;
    color: #828282;
  }
}

/* Slide-down fade-in animation */
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-down {
  opacity: 0;
  transform: translateY(-20px);
}

.animate.fade-in-down {
  animation: fadeInDown 1s ease-out forwards;
}

/* Slide-left fade-in animation */
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fade-in-left {
  animation: fadeInLeft .35s ease-out forwards;
}
</style>
