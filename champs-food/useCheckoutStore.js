// useCheckoutStore.js

import { ref, reactive, watch } from 'vue';

// Reactive state for user information, with default values from local storage
const userInfo = reactive({
  firstName: localStorage.getItem('firstName') || '',
  lastName: localStorage.getItem('lastName') || '',
  phone: localStorage.getItem('phone') || '',
  email: localStorage.getItem('email') || '',
});

// Reactive state for user payment information, with default values from local storage
const userPayment = reactive({
  cardNumber: localStorage.getItem('cardNumber') || '',
  expirationDate: localStorage.getItem('expirationDate') || '',
  ccv: localStorage.getItem('ccv') || '',
});

// Watchers to save changes in user information to local storage
watch(userInfo, (newInfo) => {
  localStorage.setItem('firstName', newInfo.firstName);
  localStorage.setItem('lastName', newInfo.lastName);
  localStorage.setItem('phone', newInfo.phone);
  localStorage.setItem('email', newInfo.email);
}, { deep: true });

// Watchers to save changes in user payment information to local storage
watch(userPayment, (newPayment) => {
  localStorage.setItem('cardNumber', newPayment.cardNumber);
  localStorage.setItem('expirationDate', newPayment.expirationDate);
  localStorage.setItem('ccv', newPayment.ccv);
}, { deep: true });

// Function to reset user information
const resetUserInfo = () => {
  userInfo.firstName = '';
  userInfo.lastName = '';
  userInfo.phone = '';
  userInfo.email = '';
};

// Function to reset user payment information
const resetUserPayment = () => {
  userPayment.cardNumber = '';
  userPayment.expirationDate = '';
  userPayment.ccv = '';
};

// Export function to use the checkout store
export function useCheckoutStore() {
  return {
    userInfo,
    userPayment,
    resetUserInfo,
    resetUserPayment
  };
}
