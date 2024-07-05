<!-- @format -->

<!-- BasicTwoColumn.vue -->
<template>
  <section :class="['wrapper-basic-outer-section', { 'special-two-up': red }]">
    <div class="wrapper-general">
      <div :class="['wrapper-basic-two-up', { 'wrapper-reverse': reverse }]">
        <div class="wrapper-inner-left">
          <h2 class="header-2">{{ header }}</h2>
          <p class="main-copy body-bottom-button">{{ body }}</p>
          <a class="" :href="buttonLink"
            ><button class="main-btn">{{ buttonText }}</button></a
          >
        </div>
        <div class="wrapper-inner-right">
          <img class="two-up-section-image" :src="imageSrc" :alt="imageAlt" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  imageSrc: String,
  imageAlt: String,
  header: String,
  body: String,
  buttonText: String,
  buttonLink: String,
  reverse: {
    type: Boolean,
    default: false,
  },
  red: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.wrapper-basic-two-up {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.wrapper-reverse .wrapper-inner-hero-left {
  order: 2;
}

.wrapper-reverse .wrapper-inner-hero-right {
  order: 1;
}

.special-two-up {
  background-color: var(--clr-primary);
}
</style>
