<!-- Checkout.vue -->
<template>
  <div class="wrapper-menu-outer-section">
    <div class="wrapper-general">
      <MiniNavigation v-if="currentStep !== 3" :current-step="currentStep" class="fade-in" />
      <h1 class="header-2 fade-in" v-if="currentStep !== 3">Checkout</h1>
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
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import UserInfo from "../components/UserInfo.vue";
import UserPayment from "../components/UserPayment.vue";
import OrderSummaryPanel from "../components/OrderSummaryPanel.vue";
import OrderConfirmation from "../components/OrderConfirmation.vue";
import { cartStore } from "../../cartStore";
import MiniNavigation from "../components/MiniNavigation.vue";
import { useCheckoutStore } from "../../useCheckoutStore";

const route = useRoute();
const router = useRouter();

const currentStep = ref(route.query.step ? parseInt(route.query.step) : 1);

watch(
  () => route.query.step,
  (newStep) => {
    if (newStep) {
      currentStep.value = parseInt(newStep);
    }
  }
);

const { resetUserInfo, resetUserPayment } = useCheckoutStore();

const nextStep = () => {
  currentStep.value++;
  router.push({ name: "Checkout", query: { step: currentStep.value } });
};

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
