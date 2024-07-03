<!-- @format -->

<!-- Checkout.vue -->
<template>
  <div class="wrapper-menu-outer-section">
    <div class="wrapper-general">
      <h1 class="header-2">Chekout</h1>
      <div class="wrapper-with-info-card-right">
        <UserInfo />
        <UserPayment />
        <div><OrderSummaryPanel /></div>
      </div>
      <OrderConfirmation />
    </div>
  </div>
</template>

<script setup>
import MiniNavigation from "../components/MiniNavigation.vue";
import UserInfo from "../components/UserInfo.vue";
import OrderSummaryPanel from "../components/OrderSummaryPanel.vue";
import UserPayment from "../components/UserPayment.vue";
import OrderConfirmation from "../components/OrderConfirmation.vue";
</script>
