<!-- Cart.vue -->
<template>
  <div class="wrapper-menu-outer-section">
    <div class="wrapper-general">
      <h1 class="header-2">My Bag</h1>
      
      <!-- Shows CartEmpty component if cart is empty -->
      <div v-if="cartStore.items.length === 0">
        <CartEmpty />
      </div>

      <!-- Displays cart items and order summary if there are items in the cart -->
      <div class="wrapper-with-info-card-right" v-else>
        <CartListItems />
        <OrderSummaryPanel />
      </div>
    </div>
  </div>
</template>

<script setup>
// Importing necessary components and store
import { ref, onMounted } from 'vue';
import CartListItems from "../components/CartListItems.vue";
import OrderSummaryPanel from "../components/OrderSummaryPanel.vue";
import CartEmpty from "../components/CartEmpty.vue";
import { cartStore } from "../../cartStore";

// State to track if it's the first time the cart page is loaded
const firstLoad = ref(true);

/**
 * onMounted lifecycle hook
 * Runs on component load to handle any first-load specific logic
 */
onMounted(() => {
  if (firstLoad.value) {
    firstLoad.value = false;
    localStorage.setItem('cartFirstLoad', 'true'); // Optional first-load marker
  }
});
</script>