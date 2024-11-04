<template>
  <!-- Transition wrapper for switching between UserInfo and UserPayment components with fade-slide effect -->
  <transition name="fade-slide" mode="out-in" @after-leave="afterLeave">
    <!-- Dynamic component to display UserInfo or UserPayment based on currentComponent value -->
    <component
      :is="currentComponent"
      @proceed="goToPayment"
      @placeOrder="placeOrder"
      :key="currentComponentKey"
    ></component>
  </transition>
</template>

<script setup>
import { ref } from 'vue';
import UserInfo from './UserInfo.vue';
import UserPayment from './UserPayment.vue';

// Track the current component to display and a unique key for re-rendering
const currentComponent = ref('UserInfo');
const currentComponentKey = ref(0);

/**
 * Switches to the UserPayment component when the 'proceed' event is emitted
 */
const goToPayment = () => {
  currentComponent.value = 'UserPayment';
  currentComponentKey.value++;
};

/**
 * Placeholder function for handling order placement when the 'placeOrder' event is emitted
 */
const placeOrder = () => {
  // Handle placing the order
};

/**
 * Ensures smooth transition by switching components after the leave animation completes
 */
const afterLeave = () => {
  setTimeout(() => {
    if (currentComponent.value === 'UserInfo') {
      currentComponent.value = 'UserPayment';
    } else {
      currentComponent.value = 'UserInfo';
    }
  }, 200); // Delay ensures the previous component is fully removed before switching
};
</script>

<style scoped>
/* Fade-slide enter and leave animations */
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

/* Transition settings for entering and leaving with fade-slide effect */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Specific animations for entering and leaving */
.fade-slide-leave-active {
  animation: fadeOutUp 0.3s forwards;
}

.fade-slide-enter-active {
  animation: fadeInUp 0.3s forwards;
}
</style>