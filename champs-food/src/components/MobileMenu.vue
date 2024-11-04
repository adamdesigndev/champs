<!-- MobileMenu.vue -->
<template>
  <transition name="slide">
    <!-- Mobile menu overlay, displayed when `isMenuOpen` is true -->
    <div v-if="isMenuOpen" class="mobile-menu">
      <nav>
        <ul>
          <!-- Menu items with fade-in animation -->
          <li v-for="(item, index) in menuItems" :key="index" class="menu-item">
            <router-link :to="item.href" @click.native="closeMenu">{{ item.text }}</router-link>
          </li>
        </ul>
      </nav>
      <!-- Logo at the bottom of the mobile menu -->
      <img class="mobile-menu-logo" src="/images/logo-mobile-menu.svg" alt="Logo" />
    </div>
  </transition>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, inject, nextTick } from 'vue';

// Injected properties to control menu state from parent
const isMenuOpen = inject('isMenuOpen');
const toggleMenu = inject('toggleMenu');

// Menu items configuration
const menuItems = [
  { href: '/Menu', text: 'Menu' },
  { href: '/Cart', text: 'Bag' },
  { href: '/About', text: 'About' },
  { href: '/', text: 'Home' },
];

/**
 * Closes the mobile menu if the viewport width exceeds 850px
 */
const handleResize = () => {
  if (window.innerWidth > 850 && isMenuOpen.value) {
    isMenuOpen.value = false;
  }
};

/**
 * Adds or removes a `no-scroll` class to prevent background scrolling when menu is open
 */
const toggleNoScrollClass = () => {
  if (isMenuOpen.value) {
    document.documentElement.classList.add('no-scroll');
  } else {
    document.documentElement.classList.remove('no-scroll');
  }
};

/**
 * Closes the mobile menu
 */
const closeMenu = () => {
  isMenuOpen.value = false;
};

// Setup event listeners and initial state on mount
onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
  toggleNoScrollClass();
});

// Cleanup event listeners on component unmount
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

// Watch for changes to `isMenuOpen` and trigger animations if menu opens
watch(isMenuOpen, async () => {
  handleResize();
  toggleNoScrollClass();
  if (isMenuOpen.value) {
    await nextTick();
    document.querySelectorAll('.menu-item').forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('fade-in');
      }, index * 100);
    });
  }
});
</script>

<style scoped>
/* Main styles for mobile menu */
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
  z-index: 1000;
  padding: 6rem 1rem 1rem;
}

/* Navigation styles */
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

/* Centered logo at the bottom of the menu */
.mobile-menu-logo {
  position: absolute;
  left: 50%;
  bottom: -35px;
  transform: translateX(-50%);
  max-height: 17rem;
}

@media (width < 400px) {
  .mobile-menu-logo {
    max-height: 20rem;
  }
}

/* Slide transition for mobile menu open/close */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from { transform: translateX(100%); }
.slide-enter-to { transform: translateX(0); }
.slide-leave-from { transform: translateX(0); }
.slide-leave-to { transform: translateX(100%); }

/* Fade-in animation for individual menu items */
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