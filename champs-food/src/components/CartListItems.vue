<!-- @format -->

<!-- CartListItems.vue -->
<template>
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
const fadeInClass = ref('');

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
