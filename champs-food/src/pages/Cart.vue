<!-- Cart.vue -->
<template>
  <!-- Outer wrapper for the cart page -->
  <div class="wrapper-menu-outer-section">
    <div class="wrapper-general">
      <!-- Header for the cart page -->
      <h1 class="header-2">My Bag</h1>
      <!-- Display CartEmpty component if cart is empty -->
      <div v-if="cartStore.items.length === 0">
        <CartEmpty />
      </div>
      <!-- Display CartListItems and OrderSummaryPanel components if cart has items -->
      <div class="wrapper-with-info-card-right" v-else>
        <CartListItems />
        <OrderSummaryPanel />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CartListItems from "../components/CartListItems.vue";
import OrderSummaryPanel from "../components/OrderSummaryPanel.vue";
import CartEmpty from "../components/CartEmpty.vue";
import { cartStore } from "../../cartStore";

// Ref to track the first load of the cart page
const firstLoad = ref(true);

// Lifecycle hook to handle actions on component mount
onMounted(() => {
  if (firstLoad.value) {
    firstLoad.value = false;
    localStorage.setItem('cartFirstLoad', 'true');
  }
});
</script>
