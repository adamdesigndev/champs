<!-- @format -->

<!-- Checkout.vue -->
<template>
  <div class="wrapper-menu-outer-section">
    <div class="wrapper-general">
      <h1 class="header-2">Checkout</h1>
      <div class="wrapper-with-info-card-right">
        <UserInfo v-if="currentStage === 1" @proceed="nextStage" />
        <UserPayment v-if="currentStage === 2" @placeOrder="nextStage" />
        <OrderSummaryPanel v-if="currentStage < 3" />
      </div>
      <OrderConfirmation v-if="currentStage === 3" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import UserInfo from "../components/UserInfo.vue";
import OrderSummaryPanel from "../components/OrderSummaryPanel.vue";
import UserPayment from "../components/UserPayment.vue";
import OrderConfirmation from "../components/OrderConfirmation.vue";

const currentStage = ref(1);

const nextStage = () => {
  currentStage.value++;
};
</script>
