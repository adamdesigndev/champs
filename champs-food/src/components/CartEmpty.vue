<!-- CartEmpty.vue -->
<template>
  <div class="wrapper-order-confirmation">
    <!-- Message prompting user to start an order -->
    <p class="main-copy body-bottom-button">
      Cart is empty, let's help with that.
    </p>
    
    <!-- Button to navigate to Menu page -->
    <button class="main-btn" @click="goMenu">Start Order</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

/**
 * Navigates the user to the Menu page to start an order
 */
const goMenu = () => {
  router.push("/Menu");
};
</script>

<style scoped>
/* Wrapper for empty cart message and button */
.wrapper-order-confirmation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* Styling for the message text */
.wrapper-order-confirmation p {
  text-align: center;
  max-width: 600px;
}
</style>