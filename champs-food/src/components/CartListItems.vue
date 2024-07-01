<!-- @format -->

<!-- CartListItems.vue -->
<template>
  <section class="cart-list">
    <CartFoodItem
      v-for="item in cartStore.items"
      :key="item.name + item.size + item.quantity"
      :item="item"
    />
  </section>
</template>

<script setup>
import { cartStore } from "../../cartStore";
import CartFoodItem from "./CartFoodItem.vue";
</script>

<style scoped>
.cart-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
