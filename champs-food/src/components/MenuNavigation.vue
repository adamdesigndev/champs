<!-- MenuNavigation.vue -->
<template>
  <!-- Header for the menu section -->
  <h1 class="header-2 fade-in-down" ref="header">Menu</h1>
  
  <nav>
    <ul class="menu-navigation fade-in-left" ref="menuList">
      <!-- Category items, with 'active' class for selected category -->
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

const categories = ref(['FEATURED', 'ENTRÉES', 'SIDES', 'SALADS', 'DRINKS', 'DESSERTS']); // Categories for menu navigation
const selectedCategory = ref('FEATURED'); // Initial selected category
const menuItems = ref([]); // Reference to navigation items for active state management
const header = ref(null); // Header reference for animation
const menuList = ref(null); // Reference to category list for animations
const animateActiveItem = ref(false); // Toggles animation class for selected item

const emit = defineEmits(['update-category']); // Emits category selection to parent

/**
 * Updates selected category and revalidates active state
 * @param {string} category - The selected category name
 */
const selectCategory = (category) => {
  selectedCategory.value = category;
  emit('update-category', category);
  nextTick(() => {
    validateActiveState();
  });
};

/**
 * Ensures active category item has the correct class
 */
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

// Set up menu items and animations on mount
onMounted(() => {
  nextTick(() => {
    menuItems.value = Array.from(menuList.value.children);
    validateActiveState();

    // Add animation classes after mount
    setTimeout(() => {
      header.value.classList.add('animate');
      menuList.value.classList.add('animate');
      animateActiveItem.value = true;
      nextTick(() => validateActiveState());
    }, 300); // Delay to allow animations to complete
  });
});

// Watch for category changes to ensure correct active state
watch(selectedCategory, () => {
  nextTick(() => {
    validateActiveState();
  });
});
</script>

<style scoped>
/* Menu navigation styles and animations */

.menu-navigation {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  opacity: 0;
  transform: translateX(-20px);
}

.menu-navigation li {
  cursor: pointer;
  position: relative;
  font-weight: normal;
  color: #828282;
  overflow: hidden;
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
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.8rem;
  }
  .menu-navigation li {
    font-size: var(--fs-200);
  }
}

/* Slide-down fade-in animation for header */
@keyframes fadeInDown {
  0% { opacity: 0; transform: translateY(-10px); }
  100% { opacity: 1; transform: translateY(0); }
}

.fade-in-down {
  opacity: 0;
  transform: translateY(-50px);
}

.animate.fade-in-down {
  animation: fadeInDown 0.2s ease-out forwards;
}

/* Slide-left fade-in animation for category list */
@keyframes fadeInLeft {
  0% { opacity: 0; transform: translateX(-20px); }
  100% { opacity: 1; transform: translateX(0); }
}

.fade-in-left {
  opacity: 0;
  transform: translateX(-20px);
}

.animate.fade-in-left {
  animation: fadeInLeft 0.3s ease-out forwards;
}
</style>