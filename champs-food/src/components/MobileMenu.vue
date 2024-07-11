<!-- MobileMenu.vue -->
<template>
  <transition name="slide">
    <div v-if="isMenuOpen" class="mobile-menu">
      <nav>
        <ul>
          <li v-for="(item, index) in menuItems" :key="index" class="menu-item" @enter="onEnter" @leave="onLeave">
            <a :href="item.href">{{ item.text }}</a>
          </li>
        </ul>
      </nav>
      <img class="mobile-menu-logo" src="/images/logo-mobile-menu.svg" alt="">
    </div>
  </transition>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, inject, nextTick } from 'vue';

const isMenuOpen = inject('isMenuOpen');
const toggleMenu = inject('toggleMenu');

const menuItems = [
  { href: '/Menu', text: 'Menu' },
  { href: '/Cart', text: 'Bag' },
  { href: '/About', text: 'About' },
  { href: '/', text: 'Home' },
];

const handleResize = () => {
  if (window.innerWidth > 850 && isMenuOpen.value) {
    isMenuOpen.value = false;
  }
};

const toggleNoScrollClass = () => {
  if (isMenuOpen.value) {
    document.documentElement.classList.add('no-scroll');
  } else {
    document.documentElement.classList.remove('no-scroll');
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize(); // Ensure initial state is correct
  toggleNoScrollClass();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

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
  gap: 2rem;
}

.mobile-menu nav a {
  color: #fff;
  text-decoration: none;
  font-size: var(--fs-900);
  font-weight: 600;
  line-height: 4rem;
}

.mobile-menu-logo {
  position: absolute;
  left: 50%;
  bottom: -5%;
  transform: translateX(-50%);
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
