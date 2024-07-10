<!-- @format -->

<!-- Cart.vue -->
<template>
  <div class="wrapper-menu-outer-section">
    <div class="wrapper-general">
      <h1 class="header-2">My Bag</h1>
      <div v-if="cartStore.items.length === 0">
        <CartEmpty />
      </div>
      <div class="wrapper-with-info-card-right" v-else>
        <CartListItems />
        <OrderSummaryPanel />
      </div>
    </div>
  </div>
</template>

<script setup>
import CartListItems from "../components/CartListItems.vue";
import OrderSummaryPanel from "../components/OrderSummaryPanel.vue";
import CartEmpty from "../components/CartEmpty.vue";
import { cartStore } from "../../cartStore";
</script>
