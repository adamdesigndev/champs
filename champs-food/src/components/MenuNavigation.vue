<!-- MenuNavigation.vue -->
<!-- MenuNavigation.vue -->
<template>
  <h1 class="header-2 fade-in-down" ref="header">Menu</h1>
  <nav>
    <ul class="menu-navigation fade-in-left" ref="menuList">
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

const categories = ref(['FEATURED', 'ENTRÉES', 'SIDES', 'SALADS', 'DRINKS', 'DESSERTS']);
const selectedCategory = ref('FEATURED'); // Set initial category to 'FEATURED'
const menuItems = ref([]);
const header = ref(null);
const menuList = ref(null);
const animateActiveItem = ref(false);

const emit = defineEmits(['update-category']);

const selectCategory = (category) => {
  selectedCategory.value = category;
  emit('update-category', category);
  nextTick(() => {
    validateActiveState();
  });
};

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

onMounted(() => {
  nextTick(() => {
    menuItems.value = Array.from(menuList.value.children);
    validateActiveState();
    
    // Ensuring animation classes are added only after mounting and validation
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

@media (width < 850px) {
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
