<!-- @format -->
<!-- BasicTwoColumn.vue -->
<template>
  <section :class="['wrapper-basic-outer-section', { 'special-two-up': red }]">
    <div class="wrapper-general">
      <div :class="['wrapper-basic-two-up', { 'wrapper-reverse': reverse }]">
        <div class="wrapper-inner-left">
          <h2 :class="['header-2', { 'white-text': textWhite }]">
            {{ header }}
          </h2>
          <img
            v-if="showAppStore"
            class="app-store"
            src="/images/app-store.svg"
            alt="App Store"
          />
          <p
            :class="[
              'main-copy body-bottom-button',
              { 'white-text': textWhite },
            ]"
          >
            {{ body }}
          </p>
          <a :href="buttonLink"
            ><button :class="['main-btn', { 'button-reverse': buttonReverse }, 
            {'hide-button': hideButton}]">
              {{ buttonText }}
            </button></a
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
  textWhite: {
    type: Boolean,
    default: false,
  },
  buttonReverse: {
    type: Boolean,
    default: false,
  },
  showAppStore: {
    type: Boolean,
    default: false,
  },
  hideButton: {
    type: Boolean,
    default: false,
  }
});
</script>

<style scoped>
.wrapper-basic-two-up {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 2rem;
  align-items: center;
}

.wrapper-reverse .wrapper-inner-left {
  order: 2;
}

.wrapper-reverse .wrapper-inner-right {
  order: 1;
}

.special-two-up {
  background-color: var(--clr-primary);
}

.white-text {
  color: #fff;
}

.button-reverse {
  background-color: #fff;
  color: var(--clr-primary);
  font-weight: 600;
}

.app-store {
  max-width: 300px;
  margin-bottom: 1rem;
}

.hide-button {
  display: none;
}
</style>
