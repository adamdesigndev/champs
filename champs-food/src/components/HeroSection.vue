<!-- HeroSection.vue -->
<template>
  <section class="wrapper-outer-hero-home">
    <div class="wrapper-inner-hero-content wrapper-general">
      <!-- Hero text section with heading, subheading, and button link -->
      <div class="wrapper-inner-hero-left fade-in-left" ref="heroLeft">
        <h1 class="header-1">{{ heading }}</h1>
        <p class="body-bottom-button">{{ subheading }}</p>
        <router-link :to="buttonLink">
          <button class="main-btn">{{ buttonText }}</button>
        </router-link>
      </div>

      <!-- Hero image section with responsive support -->
      <div class="wrapper-inner-hero-right fade-in-right" ref="heroRight">
        <picture>
          <source :media="'(max-width: 500px)'" :srcset="imageSrcSmall">
          <img class="two-up-section-image" :src="imageSrc" :alt="imageAlt" />
        </picture>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  heading: String,
  subheading: String,
  buttonText: String,
  buttonLink: String,
  imageSrc: String,
  imageSrcSmall: String,
  imageAlt: String,
});

const heroLeft = ref(null);
const heroRight = ref(null);
const route = useRoute();

/**
 * Triggers animations on mount, with conditional effects based on route
 */
onMounted(() => {
  if (route.path === '/About') {
    heroLeft.value.classList.add('fade-in-no-move');
    heroRight.value.classList.add('fade-in-no-move');
  } else {
    setTimeout(() => {
      heroLeft.value.classList.add('animate-left');
      heroRight.value.classList.add('animate-right');
    }, 500); // 0.5 second delay for staggered animation
  }
});
</script>

<style scoped>
/* Outer wrapper for hero section */
.wrapper-outer-hero-home {
  background-color: var(--clr-accent-creme);
  display: flex;
  justify-content: center;
  padding-top: var(--wrapper-outer-padding-tb);
  padding-bottom: var(--wrapper-outer-padding-tb);
}

/* Inner wrapper for hero content layout */
.wrapper-inner-hero-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--content-gap);
}

/* Image styling */
.hero-image img {
  width: 100%;
  max-width: 400px;
}

/* Initial opacity for animations */
.fade-in-left, .fade-in-right {
  opacity: 0;
}

/* Fade-in without movement */
.fade-in-no-move {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Slide-in from left animation */
.animate-left.fade-in-left {
  animation: fadeInFromLeft 0.5s ease-out forwards;
}

@keyframes fadeInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Slide-in from right animation */
.animate-right.fade-in-right {
  animation: fadeInFromRight 0.5s ease-out forwards;
}

@keyframes fadeInFromRight {
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive adjustments for mobile */
@media (width < 851px) {
  .wrapper-inner-hero-left {
    order: 2;
  }
  .wrapper-inner-hero-right {
    order: 1;
  }

  .wrapper-inner-hero-content {
    grid-template-columns: 1fr;
  }
}
</style>