<!-- Header.vue -->
<template>
  <header class="wrapper-header-outer">
    <nav class="wrapper-nav-inner">
      <button class="hamburger mobile-header" @click="toggleMenu" :class="{ 'fade-in': shouldAnimate && isHomePage }">
        <img src="/images/mobile-nav-hamburger.svg" alt="Hamburger Menu" />
      </button>
      <ul :class="['nav-menu-links', 'desktop-header', { 'fade-in': shouldAnimate && isHomePage }]">
        <li>
          <router-link class="header-nav-links nav-link" :class="{ active: isActive('/') }" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="header-nav-links nav-link" :class="{ active: isActive('/Menu') }" to="/Menu">Menu</router-link>
        </li>
        <li>
          <router-link class="header-nav-links nav-link" :class="{ active: isActive('/About') }" to="/About">About</router-link>
        </li>
      </ul>
      <a class="desktop-header" :class="{ 'fade-in': shouldAnimate && isHomePage }" href="/">
        <img class="header-logo" src="/images/Champs-head.svg" alt="Logo" />
      </a>
      <a class="mobile-header" :class="{ 'fade-in': shouldAnimate && isHomePage }" href="/">
        <img src="/images/logo-comb-mobile.svg" alt="Logo" />
      </a>
      <ul class="nav-menu-links">
        <li class="cart-icon-wrapper" :class="{ 'fade-in': shouldAnimate && isHomePage }">
          <router-link to="/Cart">
            <img class="cart-icon" src="/images/Bag-champs.svg" alt="Cart" />
            <span
              v-if="totalItems > 0"
              ref="badge"
              class="cart-notification"
              :class="{ animate: isAnimating }"
            >
              {{ totalItems }}
            </span>
          </router-link>
        </li>
        <li class="desktop-header" :class="{ 'fade-in': shouldAnimate && isHomePage }">
          <router-link class="" to="/Menu">
            <button class="main-btn">Start Order</button>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { inject, computed, ref, watch, onMounted } from 'vue';
import { cartStore } from '../../cartStore';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const isHomePage = computed(() => route.path === '/');

const toggleMenu = inject('toggleMenu');
const isMenuOpen = inject('isMenuOpen');

const totalItems = computed(() => {
  return cartStore.items.reduce((sum, item) => sum + item.quantity, 0);
});

const badgeRef = ref(null);
const lastCartLength = ref(cartStore.items.length);
const isAnimating = ref(false);

const triggerBadgeAnimation = () => {
  isAnimating.value = true;
  setTimeout(() => {
    isAnimating.value = false;
  }, 300);
};

watch(
  () => cartStore.items.length,
  (newLength, oldLength) => {
    if (newLength > oldLength) {
      triggerBadgeAnimation();
    }
    lastCartLength.value = newLength;
  }
);

const isActive = (path) => route.path === path;

const shouldAnimate = ref(false);
const hasAnimated = ref(false);

const handleRouteChange = () => {
  if (isHomePage.value) {
    shouldAnimate.value = true;
    setTimeout(() => {
      shouldAnimate.value = false;
    }, 500); // Set to the duration of the animation
  }
};

onMounted(() => {
  if (isHomePage.value) {
    handleRouteChange();
  }
});

watch(route, (newRoute, oldRoute) => {
  if (isHomePage.value) {
    handleRouteChange();
  } else {
    hasAnimated.value = false;
  }
});
</script>

<style scoped>
/* header outer content wrapper */
.wrapper-header-outer {
  background-color: #fff;
  position: relative;
  z-index: 2000; /* Ensure header is above the mobile menu */
}

.wrapper-nav-inner {
  max-width: 2400px;
  margin-inline: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
}

@media (width < 850px) {
  .wrapper-nav-inner {
  padding: 1rem 1.5rem 1rem 1.5rem;
}
}

.nav-menu-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
}

.header-nav-links {
  font-size: var(--fs-300);
  font-weight: 500;
  position: relative; /* Needed for the border-bottom effect */
  padding-bottom: 5px; /* Space for the border-bottom */
}

.header-nav-links::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--clr-primary);
  transition: width 0.3s ease-in-out;
}

.header-nav-links:hover::after {
  width: 100%;
}

.header-nav-links.active::after {
  width: 100%;
}

.header-logo {
  height: 3.5rem;
}

.cart-icon-wrapper {
  position: relative;
}

.cart-icon {
  width: 1.2rem;
}

.cart-notification {
  position: absolute;
  top: -15px;
  left: 10px;
  background-color: var(--clr-primary);
  color: #ffffff;
  border: 3px solid white;
  border-radius: 50%;
  padding: 1px;
  min-width: 32px;
  min-height: 32px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--fs-200);
}

.cart-notification.animate {
  animation: pop-in 0.3s ease;
}

@keyframes pop-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.mobile-header {
  display: none;
}

.hamburger {
  border: none;
  background-color: #fff;
  cursor: pointer;
}

.hamburger img {
  width: 25px;
}

@media (width < 850px) {
  .mobile-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .desktop-header {
    display: none;
  }
}

/* Fade-in animation */
@keyframes fadeInFromTop {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeInFromTop .5s ease-out;
}
</style>
