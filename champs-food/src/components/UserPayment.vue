<!-- UserPayment.vue -->
<template>
      <div class="user-payment">
        <h2 class="header-4">Payment Info</h2>
      <form class="wrapper-user-payment body-bottom-button" @submit.prevent="submitPaymentInfo">

        <label class="form-label">
          Card Number
          <input class="form-input" type="text" v-model="cardNumber" required>
        </label>
        <div class="user-payment-date-ccv">
        <label class="form-label">
          Expiration Date
          <input class="form-input" type="text" v-model="expirationDate" required>
        </label>
        <label class="form-label">
          CCV
          <input class="form-input" type="text" v-model="ccv" required>
        </label class="form-label">
      </div>
      </form>
      <button class="main-btn" type="submit">Place Order</button>
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
.wrapper-user-payment {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}



.user-payment-date-ccv {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
  </style>