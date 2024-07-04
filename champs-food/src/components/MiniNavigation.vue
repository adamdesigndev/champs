<!-- @format -->

<!-- MiniNavigation.vue -->
<template>
  <nav v-if="currentStep !== 3" class="mini-nav">
    <ul class="mini-nav-list">
      <li>
        <router-link :to="{ name: 'Cart' }" class="mini-nav-link"
          >Cart <span>/</span></router-link
        >
      </li>
      <li :class="{ active: currentStep === 1 }">
        <router-link
          :to="currentStep > 1 ? { name: 'Checkout', query: { step: 1 } } : '#'"
          >Contact <span v-if="currentStep < 3">/</span></router-link
        >
      </li>
      <li :class="{ active: currentStep === 2 }">
        <router-link
          :to="
            currentStep >= 2 ? { name: 'Checkout', query: { step: 2 } } : '#'
          "
          >Payment</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  currentStep: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.mini-nav-list {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  padding-bottom: 1rem;
}

.mini-nav-link {
  color: inherit;
  text-decoration: none;
}

.mini-nav-list li {
  list-style: none;
}

.mini-nav-list li a {
  color: inherit;
}

.mini-nav-list li.active a {
  color: red;
}

.mini-nav-list span {
  color: black;
}
</style>
