<!-- @format -->

<!-- OrderConfirmation.vue -->
<template>
  <div class="wrapper-order-confirmation">
    <img src="/images/order-confirmed-check.svg" alt="" />
    <h1 class="header-2">Order Complete!</h1>
    <p class="main-copy body-bottom-button">
      Thank you for your order. You will receive a confirmation at
      example@gmail.com shortly.
    </p>
    <button class="main-btn" @click="goHome">Back to Home</button>
  </div>
</template>

<script setup>
const goHome = () => {
  console.log("Navigating to home"); // Temporary for development, replace with actual navigation logic
};
</script>

<style scoped>
.wrapper-order-confirmation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.wrapper-order-confirmation img {
  max-width: 300px;
  margin-bottom: 2rem;
}

.wrapper-order-confirmation p {
  text-align: center;
  max-width: 600px;
}

.order-confirmation button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 1rem;
}
</style>
