<!-- BasicTwoColumn.vue -->
<template>
  <section :class="['wrapper-basic-outer-section', { 'special-two-up': red }]" ref="section">
    <div class="wrapper-general">
      <div :class="['wrapper-basic-two-up', { 'wrapper-reverse': reverse }]">
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
        <div class="wrapper-inner-right" :class="[fadeInClass, { 'animate': !isAboutPage && !hasHeader && isVisible, 'initial-hidden': !isAboutPage && !hasHeader }]">
          <img class="two-up-section-image" :src="imageSrc" :alt="imageAlt" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';

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

const route = useRoute();
const section = ref(null);
const isVisible = ref(false);
const hasHeader = ref(!!props.header);
const isAboutPage = ref(route.path === '/About');
const fadeInClass = ref('');

onMounted(() => {
  if (isAboutPage.value) {
    fadeInClass.value = 'fade-in';
  }
  
  if (!isAboutPage.value) {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }
});

const handleScroll = () => {
  const rect = section.value.getBoundingClientRect();
  if (rect.top <= window.innerHeight * 0.65) {
    isVisible.value = true;
    window.removeEventListener('scroll', handleScroll);
  }
};

onBeforeUnmount(() => {
  if (!isAboutPage.value) {
    window.removeEventListener('scroll', handleScroll);
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
</style>
