<!-- @format -->

<!-- Checkout.vue -->
<template>
  <div class="wrapper-menu-outer-section">
    <div class="wrapper-general">
      <h1 class="header-2" v-if="currentStep !== 3">Checkout</h1>
      <div class="wrapper-with-info-card-right">
        <UserInfo v-if="currentStep === 1" @proceed="nextStep" />
        <UserPayment v-if="currentStep === 2" @placeOrder="placeOrder" />
        <OrderSummaryPanel v-if="currentStep !== 3" />
      </div>
      <OrderConfirmation v-if="currentStep === 3" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import UserInfo from '../components/UserInfo.vue';
import UserPayment from '../components/UserPayment.vue';
import OrderSummaryPanel from '../components/OrderSummaryPanel.vue';
import OrderConfirmation from '../components/OrderConfirmation.vue';
import { cartStore } from '../../cartStore';

const currentStep = ref(1);

const nextStep = () => {
  currentStep.value++;
};

const placeOrder = () => {
  cartStore.clearCart(); // Clear the cart when order is placed
  localStorage.clear(); // Clear any saved state
  nextStep(); // Proceed to the order confirmation step
};
</script>
