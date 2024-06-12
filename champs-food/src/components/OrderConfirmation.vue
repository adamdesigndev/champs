<template>
    <div class="order-confirmation">
      <h3>Order Confirmed!</h3>
      <p>Thank you for your order. Your food will be ready soon.</p>
      <button @click="goHome">Go to Home</button>
    </div>
  </template>
  
  <script setup>
  const goHome = () => {
    console.log('Navigating to home'); // Temporary for development, replace with actual navigation logic
  };
  </script>
  
  <style scoped>
  .order-confirmation {
    padding: 1rem;
    text-align: center;
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