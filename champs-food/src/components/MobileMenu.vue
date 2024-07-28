<!-- MobileMenu.vue -->
<template>
  <!-- Transition component for sliding animation -->
  <transition name="slide">
    <div v-if="isMenuOpen" class="mobile-menu">
      <!-- Navigation Menu -->
      <nav>
        <ul>
          <!-- Menu items rendered dynamically from menuItems array -->
          <li v-for="(item, index) in menuItems" :key="index" class="menu-item" @enter="onEnter" @leave="onLeave">
            <router-link :to="item.href" @click.native="closeMenu">{{ item.text }}</router-link>
          </li>
        </ul>
      </nav>
      <!-- Mobile menu logo -->
      <img class="mobile-menu-logo" src="/images/logo-mobile-menu.svg" alt="Mobile Menu Logo">
    </div>
  </transition>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, inject, nextTick } from 'vue';

// Inject isMenuOpen and toggleMenu from parent component
const isMenuOpen = inject('isMenuOpen');
const toggleMenu = inject('toggleMenu');

// Menu items array
const menuItems = [
  { href: '/Menu', text: 'Menu' },
  { href: '/Cart', text: 'Bag' },
  { href: '/About', text: 'About' },
  { href: '/', text: 'Home' },
];

// Handle window resize event to close menu on larger screens
const handleResize = () => {
  if (window.innerWidth > 850 && isMenuOpen.value) {
    isMenuOpen.value = false;
  }
};

// Toggle no-scroll class on the HTML element to prevent scrolling
const toggleNoScrollClass = () => {
  if (isMenuOpen.value) {
    document.documentElement.classList.add('no-scroll');
  } else {
    document.documentElement.classList.remove('no-scroll');
  }
};

// Close the menu
const closeMenu = () => {
  isMenuOpen.value = false;
};

// Setup lifecycle hooks
onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize(); // Ensure initial state is correct
  toggleNoScrollClass();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

// Watch for changes in isMenuOpen to handle animations and scrolling
watch(isMenuOpen, async () => {
  handleResize();
  toggleNoScrollClass();
  if (isMenuOpen.value) {
    await nextTick();
    document.querySelectorAll('.menu-item').forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('fade-in');
      }, index * 100); // Stagger each item by 100ms
    });
  }
});
</script>
<style scoped>
.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--clr-primary);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5rem;
  z-index: 1000; /* Ensure mobile menu is below the header */
  padding: 6rem 1rem 1rem 1rem;
}

.mobile-menu nav ul {
  list-style: none;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-menu nav a {
  color: #fff;
  text-decoration: none;
  font-size: 5rem;
  font-weight: 600;
  line-height: 2rem;
}

.mobile-menu-logo {
  position: absolute;
  left: 50%;
  bottom: -35px;
  transform: translateX(-50%);
  max-height: 17rem;
}

@media (width < 400px) {
  .mobile-menu-logo {
  position: absolute;
  left: 50%;
  bottom: -35px;
  transform: translateX(-50%);
  max-height: 10rem;
}
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-enter-to {
  transform: translateX(0);
}

.slide-leave-from {
  transform: translateX(0);
}

.slide-leave-to {
  transform: translateX(100%);
}

.menu-item {
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.menu-item.fade-in {
  opacity: 1;
  transform: translateY(0);
}
</style>
