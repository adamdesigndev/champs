<template>
    <div class="wrapper-menu-outer-section">
    <div class="wrapper-general">
      <h1 class="header-2">My Bag</h1>
    <div class="wrapper-with-info-card-right">
      <CartListItems />
      <div><OrderSummaryPanel /></div>
    </div>
  </div>
    </div>
  </template>
  
  <script setup>
  import CartListItems from '../components/CartListItems.vue';
  import OrderSummaryPanel from '../components/OrderSummaryPanel.vue';
  </script>