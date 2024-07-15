<template>
    <div class="checkout-wrapper">
      <transition name="fade-slide" mode="out-in" @after-leave="handleAfterLeave">
        <component :is="currentStep" @proceed="nextStep" key="currentStep" />
      </transition>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import UserInfo from './UserInfo.vue';
  import UserPayment from './UserPayment.vue';
  
  const steps = [UserInfo, UserPayment];
  const currentStep = ref(steps[0]);
  
  const nextStep = () => {
    setTimeout(() => {
      currentStep.value = steps[1];
    }, 200); // Add a brief delay of 200ms
  };
  
  const handleAfterLeave = () => {
    // Ensure the currentStep is correctly set after leave transition
    if (currentStep.value === steps[0]) {
      setTimeout(() => {
        currentStep.value = steps[1];
      }, 200); // Ensure this delay matches the delay in nextStep
    }
  };
  </script>
  
  <style scoped>
  .checkout-wrapper {
    position: relative;
  }
  </style>
  