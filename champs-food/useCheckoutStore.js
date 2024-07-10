// useCheckoutStore.js
import { ref, reactive, watch } from 'vue';

const userInfo = reactive({
  firstName: localStorage.getItem('firstName') || '',
  lastName: localStorage.getItem('lastName') || '',
  phone: localStorage.getItem('phone') || '',
  email: localStorage.getItem('email') || '',
});

const userPayment = reactive({
  cardNumber: localStorage.getItem('cardNumber') || '',
  expirationDate: localStorage.getItem('expirationDate') || '',
  ccv: localStorage.getItem('ccv') || '',
});

// Watch and save to localStorage
watch(userInfo, (newInfo) => {
  localStorage.setItem('firstName', newInfo.firstName);
  localStorage.setItem('lastName', newInfo.lastName);
  localStorage.setItem('phone', newInfo.phone);
  localStorage.setItem('email', newInfo.email);
}, { deep: true });

watch(userPayment, (newPayment) => {
  localStorage.setItem('cardNumber', newPayment.cardNumber);
  localStorage.setItem('expirationDate', newPayment.expirationDate);
  localStorage.setItem('ccv', newPayment.ccv);
}, { deep: true });

const resetUserInfo = () => {
    userInfo.firstName = '';
    userInfo.lastName = '';
    userInfo.phone = '';
    userInfo.email = '';
};

const resetUserPayment = () => {
    userPayment.cardNumber = '';
    userPayment.expirationDate = '';
    userPayment.ccv = '';
};

export function useCheckoutStore() {
  return {
    userInfo,
    userPayment,
    resetUserInfo,
    resetUserPayment
  };
}
