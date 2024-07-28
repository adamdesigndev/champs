<!-- MenuNavigation.vue -->
<template>
  <!-- Page header -->
  <h1 class="header-2 fade-in-down" ref="header">Menu</h1>
  <!-- Navigation menu -->
  <nav>
    <ul class="menu-navigation fade-in-left" ref="menuList">
      <!-- Render categories dynamically from the categories array -->
      <li
        v-for="category in categories"
        :key="category"
        :class="{ active: category === selectedCategory, 'animate-active': category === selectedCategory && animateActiveItem }"
        @click="selectCategory(category)"
      >
        {{ category }}
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue';

// Categories for the menu
const categories = ref(['FEATURED', 'ENTRÉES', 'SIDES', 'SALADS', 'DRINKS', 'DESSERTS']);
const selectedCategory = ref('FEATURED'); // Initial category
const menuItems = ref([]);
const header = ref(null);
const menuList = ref(null);
const animateActiveItem = ref(false);

// Emit event to notify parent component of the selected category
const emit = defineEmits(['update-category']);

// Function to select a category
const selectCategory = (category) => {
  selectedCategory.value = category;
  emit('update-category', category);
  nextTick(() => {
    validateActiveState();
  });
};

// Validate and apply active state to the selected category
const validateActiveState = () => {
  menuItems.value.forEach((item) => {
    const itemText = item.textContent.trim();
    if (itemText === selectedCategory.value) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
};

// Lifecycle hook to initialize menu items and apply animations
onMounted(() => {
  nextTick(() => {
    menuItems.value = Array.from(menuList.value.children);
    validateActiveState();
    
    // Apply animations after a delay to ensure elements are mounted
    setTimeout(() => {
      header.value.classList.add('animate');
      menuList.value.classList.add('animate');
      animateActiveItem.value = true;
      nextTick(() => {
        validateActiveState(); // Re-validate after animations
      });
    }, 300); // Adjust the delay as needed to ensure animations are complete
  });
});

// Watch for changes in the selectedCategory to update active state
watch(selectedCategory, () => {
  nextTick(() => {
    validateActiveState();
  });
});
</script>

<style scoped>
.menu-navigation {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  opacity: 0; /* Initially hide the list */
  transform: translateX(-20px); /* Slide from left */
}

.menu-navigation li {
  cursor: pointer;
  position: relative; /* Needed for pseudo-element positioning */
  font-weight: normal;
  color: #828282;
  overflow: hidden; /* Ensure the expanding border doesn't overflow */
}

.menu-navigation li::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--clr-primary);
  transition: width 0.4s ease, left 0.4s ease;
}

.menu-navigation li:hover::after,
.menu-navigation li.animate-active::after {
  width: 100%;
  left: 0;
}

.menu-navigation li.active::after {
  width: 100%;
  left: 0;
}

.menu-navigation li.active {
  font-weight: 600;
  color: var(--clr-body);
}

@media (width < 851px) {
  .menu-navigation {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: .8rem;
  }

  .menu-navigation li {
    font-size: var(--fs-200);
  }
}

/* Slide-down fade-in animation */
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-down {
  opacity: 0;
  transform: translateY(-50px);
}

.animate.fade-in-down {
  animation: fadeInDown .2s ease-out forwards;
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
  animation: fadeInLeft 0.3s ease-out forwards;
}

.animate.fade-in-left {
  animation: fadeInLeft 0.3s ease-out forwards;
}
</style>
