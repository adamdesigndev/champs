<template>
    <div>
      <MiniNavigation />
      <UserInfo />
      <UserPayment />
      <OrderConfirmation />
    </div>
  </template>
  
  <script setup>
  import MiniNavigation from '../components/MiniNavigation.vue';
  import UserInfo from '../components/UserInfo.vue';
  import UserPayment from '../components/UserPayment.vue';
  import OrderConfirmation from '../components/OrderConfirmation.vue';
  </script>