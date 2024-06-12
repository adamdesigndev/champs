<template>
      <div class="user-payment">
      <h3>Payment Information</h3>
      <form @submit.prevent="submitPaymentInfo">
        <label>
          Card Name:
          <input type="text" v-model="cardName" required>
        </label>
        <label>
          Card Number:
          <input type="text" v-model="cardNumber" required>
        </label>
        <label>
          Expiration Date:
          <input type="text" v-model="expirationDate" required>
        </label>
        <label>
          CCV:
          <input type="text" v-model="ccv" required>
        </label>
        <button type="submit">Place Order</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';

const cardName = ref('');
const cardNumber = ref('');
const expirationDate = ref('');
const ccv = ref('');

const submitPaymentInfo = () => {
  // Logic to handle payment information submission
  console.log('Payment info submitted', { cardName: cardName.value, cardNumber: cardNumber.value, expirationDate: expirationDate.value, ccv: ccv.value });
};
  </script>
  
  <style scoped>
  .user-payment {
  padding: 1rem;
}

.user-payment form {
  display: flex;
  flex-direction: column;
}

.user-payment label {
  margin-bottom: 0.5rem;
}

.user-payment button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 1rem;
}
  </style>