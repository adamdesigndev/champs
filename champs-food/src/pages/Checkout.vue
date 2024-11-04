<!-- Checkout.vue -->
<template>
  <div class="wrapper-menu-outer-section">
    <div class="wrapper-general">
      <!-- Mini navigation for checkout steps, hidden on the final step -->
      <MiniNavigation v-if="currentStep !== 3" :current-step="currentStep" class="fade-in" />
      <h1 class="header-2 fade-in" v-if="currentStep !== 3">Checkout</h1>

      <div class="wrapper-with-info-card-right">
        <!-- Step 1: User Info form -->
        <UserInfo v-if="currentStep === 1" @proceed="nextStep" />

        <!-- Step 2: Payment form -->
        <UserPayment v-if="currentStep === 2" @placeOrder="placeOrder" />

        <!-- Order summary panel, visible on all steps except confirmation -->
        <OrderSummaryPanel v-if="currentStep !== 3" />

        <!-- Step 3: Order confirmation -->
        <OrderConfirmation v-if="currentStep === 3" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import UserInfo from "../components/UserInfo.vue";
import UserPayment from "../components/UserPayment.vue";
import OrderSummaryPanel from "../components/OrderSummaryPanel.vue";
import OrderConfirmation from "../components/OrderConfirmation.vue";
import { cartStore } from "../../cartStore";
import MiniNavigation from "../components/MiniNavigation.vue";
import { useCheckoutStore } from "../../useCheckoutStore";

// Access route and router for managing query parameters and navigation
const route = useRoute();
const router = useRouter();

// Tracks the current checkout step, defaulting to 1 or the value in query params
const currentStep = ref(route.query.step ? parseInt(route.query.step) : 1);

// Watcher to sync `currentStep` with route query changes
watch(
  () => route.query.step,
  (newStep) => {
    if (newStep) {
      currentStep.value = parseInt(newStep);
    }
  }
);

// Import reset functions from checkout store to clear user data after order is placed
const { resetUserInfo, resetUserPayment } = useCheckoutStore();

/**
 * Advances to the next step in the checkout process
 */
const nextStep = () => {
  currentStep.value++;
  router.push({ name: "Checkout", query: { step: currentStep.value } });
};

/**
 * Completes the order, clears cart data, and navigates to the confirmation step
 */
const placeOrder = () => {
  cartStore.clearCart();         // Clears cart items
  resetUserInfo();               // Resets user information in store
  resetUserPayment();            // Resets payment information in store
  localStorage.clear();          // Clears any saved state from localStorage
  currentStep.value = 3;         // Sets current step to confirmation
  router.push({ name: "Checkout", query: { step: currentStep.value } });
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.5s forwards;
}
</style>