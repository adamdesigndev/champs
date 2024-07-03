<!-- @format -->

<!-- UserPayment.vue -->
<template>
  <div class="user-payment">
    <h2 class="header-4">Payment Info</h2>
    <form
      class="wrapper-user-payment body-bottom-button"
      @submit.prevent="submitPaymentInfo"
    >
      <label class="form-label">
        Card Number
        <input class="form-input" type="text" v-model="cardNumber" required />
      </label>
      <div class="user-payment-date-ccv">
        <label class="form-label">
          Expiration Date
          <input
            class="form-input"
            type="text"
            v-model="expirationDate"
            required
          />
        </label>
        <label class="form-label">
          CCV
          <input class="form-input" type="text" v-model="ccv" required />
        </label>
      </div>
      <button class="main-btn" type="submit">Place Order</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const cardNumber = ref("");
const expirationDate = ref("");
const ccv = ref("");

const submitPaymentInfo = () => {
  console.log("Payment info submitted", { cardNumber, expirationDate, ccv }); // Temporary for development, replace with actual logic
  emit("placeOrder");
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
