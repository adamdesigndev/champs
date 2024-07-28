<!-- UserPayment.vue -->
<template>
  <div class="user-payment">
    <h2 class="header-4 user-payment-stagger">Payment Info</h2>
    <form class="wrapper-user-payment body-bottom-button" @submit.prevent="submitPaymentInfo">
      <label class="form-label user-payment-stagger">
        Card Number
        <input class="form-input" type="text" v-model="formattedCardNumber" required maxlength="19" @input="validateCardNumber">
        <span v-if="!isCardNumberValid && showErrors" class="error-message">Please input a valid card number</span>
      </label>
      <div class="user-payment-date-ccv">
        <label class="form-label user-payment-stagger">
          Expiration Date
          <input class="form-input" type="text" v-model="formattedExpirationDate" required maxlength="5" @input="validateExpirationDate">
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
import { ref, computed, onMounted } from 'vue';
import { useCheckoutStore } from '../../useCheckoutStore.js';

// Retrieve the userPayment state from the checkout store
const { userPayment } = useCheckoutStore();

// Initialize user payment details
userPayment.cardNumber = "1085268432574025";
userPayment.expirationDate = "0105";
userPayment.ccv = "558";

// Validation flags
const isCardNumberValid = ref(true);
const isExpirationDateValid = ref(true);
const isCCVValid = ref(true);
const showErrors = ref(false);

// Computed property for formatted card number with spaces
const formattedCardNumber = computed({
  get() {
    return userPayment.cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
  },
  set(value) {
    userPayment.cardNumber = value.replace(/\s+/g, '').slice(0, 16);
  }
});

// Computed property for formatted expiration date
const formattedExpirationDate = computed({
  get() {
    return userPayment.expirationDate.replace(/(\d{2})(?=\d)/, '$1/');
  },
  set(value) {
    userPayment.expirationDate = value.replace(/\D/g, '').slice(0, 4);
  }
});

// Event emitter for 'placeOrder'
const emit = defineEmits(['placeOrder']);

// Function to validate card number input
const validateCardNumber = (event) => {
  const value = event.target.value.replace(/\s+/g, '').slice(0, 16);
  userPayment.cardNumber = value;
  isCardNumberValid.value = value.length === 16;
};

// Function to validate expiration date input
const validateExpirationDate = (event) => {
  const value = event.target.value.replace(/\D/g, '').slice(0, 4);
  userPayment.expirationDate = value;
  isExpirationDateValid.value = value.length === 4;
};

// Function to validate CCV input
const validateCCV = (event) => {
  const value = event.target.value.replace(/[^0-9]/g, '').slice(0, 3);
  userPayment.ccv = value;
  isCCVValid.value = value.length === 3;
};

// Function to handle form submission
const submitPaymentInfo = () => {
  showErrors.value = true;
  validateCardNumber({ target: { value: userPayment.cardNumber } });
  validateExpirationDate({ target: { value: userPayment.expirationDate } });
  validateCCV({ target: { value: userPayment.ccv } });

  if (isCardNumberValid.value && isExpirationDateValid.value && isCCVValid.value) {
    emit('placeOrder');
  }
};

// Add staggered animation to elements on mount
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

.user-payment label {
  margin-bottom: 0.5rem;
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
