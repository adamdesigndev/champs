<!-- HeroSection.vue -->
<template>
  <section class="wrapper-outer-hero-home">
    <div class="wrapper-inner-hero-content wrapper-general">
      <div class="wrapper-inner-hero-left fade-in-top" ref="heroLeft">
        <h1 class="header-1">{{ heading }}</h1>
        <p class="body-bottom-button">{{ subheading }}</p>
        <button class="main-btn">
          <a class="" :href="buttonLink">{{ buttonText }}</a>
        </button>
      </div>
      <div class="wrapper-inner-hero-right fade-in-left" ref="heroRight">
        <img class="two-up-section-image" :src="imageSrc" :alt="imageAlt" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  heading: String,
  subheading: String,
  buttonText: String,
  buttonLink: String,
  imageSrc: String,
  imageAlt: String,
});

const heroLeft = ref(null);
const heroRight = ref(null);

onMounted(() => {
  setTimeout(() => {
    heroLeft.value.classList.add('animate');
    heroRight.value.classList.add('animate');
  }, 800); // 1 second delay to allow header animation to complete
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
  grid-template-columns: repeat(auto-fit, minmax(min(375px, 100%), 1fr));
  gap: var(--content-gap);
}

.hero-image img {
  width: 100%;
  max-width: 400px;
}

/* Fade-in animations */
@keyframes fadeInFromTop {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fade-in-top {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-in-left {
  opacity: 0;
  transform: translateX(-20px);
}

.animate.fade-in-top {
  animation: fadeInFromTop 1s ease-out forwards;
}

.animate.fade-in-left {
  animation: fadeInFromLeft 1s ease-out forwards;
}
</style>
