// useCheckoutStore.js
import { ref, reactive, watch } from 'vue';

// Reactive user information, initialized with values from localStorage if available
const userInfo = reactive({
  firstName: localStorage.getItem('firstName') || '',
  lastName: localStorage.getItem('lastName') || '',
  phone: localStorage.getItem('phone') || '',
  email: localStorage.getItem('email') || '',
});

// Reactive payment information, initialized with values from localStorage if available
const userPayment = reactive({
  cardNumber: localStorage.getItem('cardNumber') || '',
  expirationDate: localStorage.getItem('expirationDate') || '',
  ccv: localStorage.getItem('ccv') || '',
});

// Watch for changes in userInfo and update localStorage accordingly
watch(userInfo, (newInfo) => {
  localStorage.setItem('firstName', newInfo.firstName);
  localStorage.setItem('lastName', newInfo.lastName);
  localStorage.setItem('phone', newInfo.phone);
  localStorage.setItem('email', newInfo.email);
}, { deep: true });

// Watch for changes in userPayment and update localStorage accordingly
watch(userPayment, (newPayment) => {
  localStorage.setItem('cardNumber', newPayment.cardNumber);
  localStorage.setItem('expirationDate', newPayment.expirationDate);
  localStorage.setItem('ccv', newPayment.ccv);
}, { deep: true });

// Resets user information fields to empty strings
const resetUserInfo = () => {
  userInfo.firstName = '';
  userInfo.lastName = '';
  userInfo.phone = '';
  userInfo.email = '';
};

// Resets payment information fields to empty strings
const resetUserPayment = () => {
  userPayment.cardNumber = '';
  userPayment.expirationDate = '';
  userPayment.ccv = '';
};

// Returns the store's reactive state and reset functions for use in components
export function useCheckoutStore() {
  return {
    userInfo,
    userPayment,
    resetUserInfo,
    resetUserPayment
  };
}