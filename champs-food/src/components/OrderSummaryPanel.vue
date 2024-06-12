<template>
    <aside class="order-summary">
      <h3>Order Summary</h3>
      <p>Total Items: {{ totalItems }}</p>
      <p>Subtotal: ${{ subtotal.toFixed(2) }}</p>
      <p>Tax (5%): ${{ tax.toFixed(2) }}</p>
      <p>Total: ${{ total.toFixed(2) }}</p>
      <button @click="proceedToCheckout">Proceed to Checkout</button>
    </aside>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { ref } from 'vue';
  
  const cartItems = ref([
    { name: 'Chicken Tender', price: 5.99, quantity: 2 },
    { name: 'Spicy Chicken Burger', price: 5.99, quantity: 1 }
  ]); // Sample data, replace with actual cart logic
  
  const totalItems = computed(() => cartItems.value.reduce((sum, item) => sum + item.quantity, 0));
  const subtotal = computed(() => cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0));
  const tax = computed(() => subtotal.value * 0.05);
  const total = computed(() => subtotal.value + tax.value);
  
  const proceedToCheckout = () => {
    console.log('Proceeding to checkout'); // Temporary for development, replace with navigation to checkout
  };
  </script>
  
  <style scoped>
  .order-summary {
    border: 1px solid #ddd;
    padding: 1rem;
    text-align: center;
  }
  
  .order-summary button {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  </style>