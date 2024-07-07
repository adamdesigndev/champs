<!-- HeroSection.vue -->
<template>
  <section class="wrapper-outer-hero-home">
    <div class="wrapper-inner-hero-content wrapper-general">
      <div class="wrapper-inner-hero-left">
        <h1 class="header-1">{{ heading }}</h1>
        <p class="body-bottom-button">{{ subheading }}</p>
        <button class="main-btn"><a class="" :href="buttonLink">{{ buttonText }}</a></button>
      </div>
      <div class="wrapper-inner-hero-right">
        <img class="two-up-section-image" :src="imageSrc" :alt="imageAlt">
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  heading: String,
  subheading: String,
  buttonText: String,
  buttonLink: String,
  imageSrc: String,
  imageAlt: String
  
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
</style>
