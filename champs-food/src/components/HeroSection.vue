<!-- HeroSection.vue -->
<!-- HeroSection.vue -->
<template>
  <section class="wrapper-outer-hero-home">
    <div class="wrapper-inner-hero-content wrapper-general">
      <div class="wrapper-inner-hero-left fade-in-left" ref="heroLeft">
        <h1 class="header-1">{{ heading }}</h1>
        <p class="body-bottom-button">{{ subheading }}</p>
        <router-link :to="buttonLink">
          <button class="main-btn">{{ buttonText }}</button>
        </router-link>
      </div>
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

onMounted(() => {
  if (route.path === '/About') {
    heroLeft.value.classList.add('fade-in-no-move');
    heroRight.value.classList.add('fade-in-no-move');
  } else {
    setTimeout(() => {
      heroLeft.value.classList.add('animate-left');
      heroRight.value.classList.add('animate-right');
    }, 500); // 0.5 second delay
  }
});
</script>

<style scoped>
.wrapper-outer-hero-home {
  background-color: var(--clr-accent-creme);
  display: flex;
  justify-content: center;
  padding-top: var(--wrapper-outer-padding-tb);
  padding-bottom: var(--wrapper-outer-padding-tb);
}

.wrapper-inner-hero-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--content-gap);
}

.hero-image img {
  width: 100%;
  max-width: 400px;
}

.fade-in-left, .fade-in-right {
  opacity: 0;
}

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

/* Media query for mobile devices */
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
