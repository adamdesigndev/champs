<!-- Checkout.vue -->
<template>
  <!-- Outer wrapper for the checkout page -->
  <div class="wrapper-menu-outer-section">
    <div class="wrapper-general">
      <!-- Mini navigation for checkout steps, shown if not on the final step -->
      <MiniNavigation v-if="currentStep !== 3" :current-step="currentStep" class="fade-in" />
      <!-- Header for the checkout page, shown if not on the final step -->
      <h1 class="header-2 fade-in" v-if="currentStep !== 3">Checkout</h1>
      <div class="wrapper-with-info-card-right">
        <!-- User information form, shown on step 1 -->
        <UserInfo v-if="currentStep === 1" @proceed="nextStep" />
        <!-- User payment form, shown on step 2 -->
        <UserPayment v-if="currentStep === 2" @placeOrder="placeOrder" />
        <!-- Order summary panel, shown if not on the final step -->
        <OrderSummaryPanel v-if="currentStep !== 3" />
      </div>
      <!-- Order confirmation, shown on the final step -->
      <OrderConfirmation v-if="currentStep === 3" />
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

// Get the current route and router
const route = useRoute();
const router = useRouter();

// Ref to track the current step of the checkout process
const currentStep = ref(route.query.step ? parseInt(route.query.step) : 1);

// Watch for changes in the route query step and update currentStep accordingly
watch(
  () => route.query.step,
  (newStep) => {
    if (newStep) {
      currentStep.value = parseInt(newStep);
    }
  }
);

// Destructure reset functions from useCheckoutStore
const { resetUserInfo, resetUserPayment } = useCheckoutStore();

// Function to proceed to the next step
const nextStep = () => {
  currentStep.value++;
  router.push({ name: "Checkout", query: { step: currentStep.value } });
};

// Function to place the order
const placeOrder = () => {
  cartStore.clearCart(); // Clear the cart when order is placed
  resetUserInfo();
  resetUserPayment();
  localStorage.clear(); // Clear any saved state
  currentStep.value = 3;
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
