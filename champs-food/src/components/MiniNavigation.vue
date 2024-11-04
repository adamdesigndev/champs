<!-- MiniNavigation.vue -->
<template>
  <!-- Mini navigation, visible only if not on the final step -->
  <nav v-if="currentStep !== 3" class="mini-nav">
    <ul class="mini-nav-list">
      <!-- Link to Cart page -->
      <li>
        <router-link :to="{ name: 'Cart' }" class="mini-nav-link">Cart <span>/</span></router-link>
      </li>

      <!-- Link to Contact step, becomes active if currentStep is 1 -->
      <li :class="{ active: currentStep === 1 }">
        <router-link
          :to="currentStep > 1 ? { name: 'Checkout', query: { step: 1 } } : '#'"
        >
          Contact<span v-if="currentStep === 2"> /</span>
        </router-link>
      </li>

      <!-- Link to Payment step, displayed if currentStep is 2 or more -->
      <li v-if="currentStep >= 2" :class="{ active: currentStep === 2 }">
        <router-link :to="{ name: 'Checkout', query: { step: 2 } }">Payment</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { defineProps } from 'vue';

// Accepts the current checkout step as a prop
const props = defineProps({
  currentStep: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
/* Mini navigation list styling */
.mini-nav-list {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  padding-bottom: 1rem;
}

/* Styling for navigation links */
.mini-nav-link {
  color: inherit;
  text-decoration: none;
}

.mini-nav-list li {
  list-style: none;
}

/* Active step styling */
.mini-nav-list li.active a {
  color: red;
}

/* Divider styling */
.mini-nav-list span {
  color: black;
}
</style>