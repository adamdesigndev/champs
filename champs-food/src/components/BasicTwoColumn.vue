<!-- BasicTwoColumn.vue -->
<template>
  <!-- Section container with conditional classes -->
  <section :class="['wrapper-basic-outer-section', { 'special-two-up': red }]" ref="section">
    <div class="wrapper-general">
      <div :class="['wrapper-basic-two-up', { 'wrapper-reverse': reverse }]">
        <!-- Left inner wrapper with conditional animation classes -->
        <div class="wrapper-inner-left" :class="[fadeInClass, { 'animate': !isAboutPage && hasHeader && isVisible, 'initial-hidden': !isAboutPage && hasHeader }]">
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
          <router-link :to="buttonLink">
            <button :class="['main-btn', { 'button-reverse': buttonReverse }, {'hide-button': hideButton}]">
              {{ buttonText }}
            </button>
          </router-link>
        </div>
        <!-- Right inner wrapper with conditional animation classes -->
        <div class="wrapper-inner-right" :class="[fadeInClass, { 'animate': !isAboutPage && !hasHeader && isVisible, 'initial-hidden': !isAboutPage && !hasHeader }]">
          <picture>
            <source :media="'(max-width: 500px)'" :srcset="imageSrcSmall">
            <img class="two-up-section-image" :src="imageSrc" :alt="imageAlt" />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';

// Define props for the component
const props = defineProps({
  imageSrc: String,
  imageSrcSmall: String,
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

// Get the current route
const route = useRoute();
const section = ref(null);
const isVisible = ref(false);
const hasHeader = ref(!!props.header);
const isAboutPage = ref(route.path === '/About');
const fadeInClass = ref('');

// Lifecycle hook to handle mounted logic
onMounted(() => {
  if (isAboutPage.value) {
    fadeInClass.value = 'fade-in';
  }
  
  if (!isAboutPage.value) {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }
});

// Function to handle scroll event for visibility animation
const handleScroll = () => {
  const rect = section.value.getBoundingClientRect();
  if (rect.top <= window.innerHeight * 0.65) {
    isVisible.value = true;
    window.removeEventListener('scroll', handleScroll);
  }
};

// Lifecycle hook to clean up scroll event listener before unmount
onBeforeUnmount(() => {
  if (!isAboutPage.value) {
    window.removeEventListener('scroll', handleScroll);
  }
});
</script>

<style scoped>
.wrapper-basic-two-up {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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

/* Initial hidden state */
.initial-hidden {
  opacity: 0;
  transform: translateY(20px);
}

/* Fade-in animation */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate {
  animation: fadeInUp 400ms ease-out forwards;
}

/* Fade-in without movement for About page */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fade-in {
  opacity: 0;
}

.fade-in.fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

/* Media query for mobile devices */
@media (width < 880px) {
  .wrapper-inner-left {
    order: 2;
  }
  .wrapper-inner-right {
    order: 1;
  }
}
</style>
