<!-- CartListItems.vue -->
<template>
  <!-- Cart list section with fade-in effect if on the Cart page -->
  <section :class="['cart-list', fadeInClass]">
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

const route = useRoute();
const fadeInClass = ref(''); // Tracks fade-in class to apply animation

// Adds fade-in animation class if on the Cart page
onMounted(() => {
  if (route.name === 'Cart') {
    fadeInClass.value = 'fade-in';
  }
});
</script>

<style scoped>
/* Cart list layout */
.cart-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Fade-in animation for cart items */
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
  animation: fadeIn 0.5s ease-out forwards;
}
</style>