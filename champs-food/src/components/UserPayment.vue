<!-- @format -->

<!-- UserPayment.vue -->
<template>
  <div class="user-payment">
    <h2 class="header-4 user-payment-stagger">Payment Info</h2>
    <form class="wrapper-user-payment body-bottom-button" @submit.prevent="submitPaymentInfo">
      <label class="form-label user-payment-stagger">
        Card Number
        <input class="form-input" type="text" v-model="userPayment.cardNumber" required maxlength="16" @input="validateCardNumber">
        <span v-if="!isCardNumberValid && showErrors" class="error-message">Please input a valid card number</span>
      </label>
      <div class="user-payment-date-ccv">
        <label class="form-label user-payment-stagger">
          Expiration Date
          <input class="form-input" type="text" v-model="userPayment.expirationDate" required maxlength="4" @input="validateExpirationDate">
          <span v-if="!isExpirationDateValid && showErrors" class="error-message">Please input a valid expiration date</span>
        </label>
        <label class="form-label user-payment-stagger">
          CCV
          <input class="form-input" type="text" v-model="userPayment.ccv" required maxlength="3" @input="validateCCV">
          <span v-if="!isCCVValid && showErrors" class="error-message">Please input a valid CCV</span>
        </label>
      </div>
      <button class="main-btn user-payment-stagger" type="submit">Place Order</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCheckoutStore } from '../../useCheckoutStore.js';

const { userPayment } = useCheckoutStore();

const isCardNumberValid = ref(true);
const isExpirationDateValid = ref(true);
const isCCVValid = ref(true);
const showErrors = ref(false);

const emit = defineEmits(['placeOrder']);

const validateCardNumber = (event) => {
  const value = event.target.value.replace(/[^0-9]/g, '').slice(0, 16);
  userPayment.cardNumber = value;
  isCardNumberValid.value = value.length === 16;
};

const validateExpirationDate = (event) => {
  const value = event.target.value.replace(/[^0-9]/g, '').slice(0, 4);
  userPayment.expirationDate = value;
  isExpirationDateValid.value = value.length === 4;
};

const validateCCV = (event) => {
  const value = event.target.value.replace(/[^0-9]/g, '').slice(0, 3);
  userPayment.ccv = value;
  isCCVValid.value = value.length === 3;
};

const submitPaymentInfo = () => {
  showErrors.value = true;
  validateCardNumber({ target: { value: userPayment.cardNumber } });
  validateExpirationDate({ target: { value: userPayment.expirationDate } });
  validateCCV({ target: { value: userPayment.ccv } });

  if (isCardNumberValid.value && isExpirationDateValid.value && isCCVValid.value) {
    emit('placeOrder');
  }
};

onMounted(() => {
  const elements = document.querySelectorAll('.user-payment-stagger');
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('staggered');
    }, index * 100); // Stagger each element by 100ms
  });
});
</script>

<style scoped>
@keyframes fadeInUpUserPayment {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.user-payment-stagger {
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
}

.user-payment-stagger.staggered {
  animation: fadeInUpUserPayment 0.3s forwards;
}

.wrapper-user-payment {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.user-payment-date-ccv {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  gap: 1rem;
}

.error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}
</style>


