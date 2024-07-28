<!-- TransitionWrapper.vue -->
<template>
  <!-- Transition component to manage transitions between child components -->
  <transition name="fade-slide" mode="out-in" @after-leave="afterLeave">
    <!-- Dynamically render the current component (UserInfo or UserPayment) -->
    <component :is="currentComponent" @proceed="goToPayment" @placeOrder="placeOrder" :key="currentComponentKey"></component>
  </transition>
</template>

<script setup>
import { ref } from 'vue';
import UserInfo from './UserInfo.vue';
import UserPayment from './UserPayment.vue';

// Ref to store the current component being displayed
const currentComponent = ref('UserInfo');
// Ref to store the key for the current component to force re-render
const currentComponentKey = ref(0);

// Function to switch to the UserPayment component
const goToPayment = () => {
  currentComponent.value = 'UserPayment';
  currentComponentKey.value++;
};

// Placeholder function to handle order placement
const placeOrder = () => {
  // Handle placing the order
};

// Function to handle actions after the component leave transition is complete
const afterLeave = () => {
  setTimeout(() => {
    // Toggle between UserInfo and UserPayment components with a small delay
    if (currentComponent.value === 'UserInfo') {
      currentComponent.value = 'UserPayment';
    } else {
      currentComponent.value = 'UserInfo';
    }
  }, 200); // Add a small delay to ensure the previous component is fully removed
};
</script>
  
  <style scoped>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeOutUp {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
  
  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: opacity 0.3s, transform 0.3s;
  }
  
  .fade-slide-enter-from,
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
  
  .fade-slide-leave-active {
    animation: fadeOutUp 0.3s forwards;
  }
  
  .fade-slide-enter-active {
    animation: fadeInUp 0.3s forwards;
  }
  </style>
  