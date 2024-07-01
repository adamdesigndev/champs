<!-- @format -->
<!-- OrderSummaryPanel.vue -->
<template>
  <aside class="menu-cart-card-right cart-summary">
    <div class="card-header-cart">
      <h2 class="header-5">Order Summary</h2>
      <p class="header-6">{{ totalItems }} item(s)</p>
    </div>
    <div class="panel-list-items">
      <div
        v-for="item in cartStore.items"
        :key="item.name + item.size"
        class="panel-item"
      >
        <div class="panel-item-name-size">
          <h6 class="header-6">{{ item.name }}</h6>
          <p class="size-quantity-details" v-if="item.sizes">{{ item.size }}</p>
        </div>
        <div class="panel-price-quantity">
          <p class="panel-item-price">
            ${{ (item.totalPrice / item.quantity).toFixed(2) }}
          </p>
          <p class="size-quantity-details">
            Qty: <span>{{ item.quantity }}</span>
          </p>
        </div>
      </div>
    </div>

    <div class="cart-price-order-details">
      <div class="inner-cart-price-order-details">
        <p class="cart-total-details">Subtotal:</p>
        <p class="cart-total-details">${{ subtotal.toFixed(2) }}</p>
      </div>
      <div class="inner-cart-price-order-details">
        <p class="cart-total-details">Tax:</p>
        <p class="cart-total-details">${{ tax.toFixed(2) }}</p>
      </div>
    </div>
    <button class="main-btn add-item-with-price" @click="proceedToCheckout">
      <p>Checkout</p>
      <p>${{ total.toFixed(2) }}</p>
    </button>
  </aside>
</template>

<script setup>
import { computed } from "vue";
import { cartStore } from "../../cartStore";

const totalItems = computed(() =>
  cartStore.items.reduce((sum, item) => sum + item.quantity, 0)
);
const subtotal = computed(() =>
  cartStore.items.reduce((sum, item) => sum + item.totalPrice, 0)
);
const tax = computed(() => subtotal.value * 0.09);
const total = computed(() => subtotal.value + tax.value);

const proceedToCheckout = () => {
  console.log("Proceeding to checkout"); // Temporary for development, replace with navigation to checkout
};
</script>

<style scoped>
.cart-summary {
  justify-content: space-between;
  gap: 2rem;
}

.panel-list-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.panel-item {
  display: grid;
  grid-template-columns: 3fr 1fr;
  border-bottom: 1px rgb(219, 219, 219) solid;
  gap: 1rem;
  padding-bottom: 1rem;
}

.size-quantity-details {
  font-size: var(--fs-300);
  color: rgb(103, 103, 103);
}

.panel-price-quantity {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
}

.panel-item-price {
  font-size: var(--fs-200);
}

.inner-cart-price-order-details {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
}

.cart-total-details {
  font-size: var(--fs-200);
}

.add-item-with-price {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
}
</style>
