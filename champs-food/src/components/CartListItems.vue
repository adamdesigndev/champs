<!-- CartListItems.vue -->
<template>
  <!-- Section container for the list of cart items -->
  <section :class="['cart-list', fadeInClass]">
    <!-- Render CartFoodItem component for each item in the cart -->
    <CartFoodItem
      v-for="item in cartStore.items"
      :key="item.name + item.size + item.quantity"
      :item="item"
    />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { cartStore } from "../../cartStore";
import CartFoodItem from "./CartFoodItem.vue";

// Get the current route
const route = useRoute();

// State variable to manage the fade-in class
const fadeInClass = ref('');

// Lifecycle hook to add the fade-in class if the current route is 'Cart'
onMounted(() => {
  if (route.name === 'Cart') {
    fadeInClass.value = 'fade-in';
  }
});
</script>

<style scoped>
.cart-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Fade-in without movement */
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

.fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}
</style>
