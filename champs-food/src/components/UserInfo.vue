<!-- @format -->

<!-- UserInfo.vue -->
<template>
  <div class="user-info">
    <h2 class="header-4">Contact Info</h2>
    <form class="wrapper-contact-form body-bottom-button" @submit.prevent="submitUserInfo">
      <label class="form-label">
        First Name
        <input class="form-input" type="text" v-model="firstName" required maxlength="40">
        <span v-if="!isFirstNameValid && showErrors" class="error-message">Please input a valid first name</span>
      </label>
      <label class="form-label">
        Last Name
        <input class="form-input" type="text" v-model="lastName" required maxlength="40">
        <span v-if="!isLastNameValid && showErrors" class="error-message">Please input a valid last name</span>
      </label>
      <label class="form-label">
        Phone
        <input class="form-input" type="tel" v-model="phone" required maxlength="12" @input="validatePhone">
        <span v-if="!isPhoneValid && showErrors" class="error-message">Please input a valid phone number</span>
      </label>
      <label class="form-label">
        Email
        <input class="form-input" type="email" v-model="email" required maxlength="40">
        <span v-if="!isEmailValid && showErrors" class="error-message">Please input a valid email</span>
      </label>
      <button class="main-btn" type="submit">Proceed to Payment</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const phone = ref('');
const email = ref('');

const isFirstNameValid = ref(true);
const isLastNameValid = ref(true);
const isPhoneValid = ref(true);
const isEmailValid = ref(true);
const showErrors = ref(false);

const emit = defineEmits(['proceed']);

const validatePhone = (event) => {
  const value = event.target.value.replace(/[^0-9]/g, '').slice(0, 12);
  phone.value = value;
  isPhoneValid.value = value.length >= 7;
};

const submitUserInfo = () => {
  showErrors.value = true;
  isFirstNameValid.value = firstName.value.length > 0 && firstName.value.length <= 40;
  isLastNameValid.value = lastName.value.length > 0 && lastName.value.length <= 40;
  isPhoneValid.value = phone.value.length >= 7 && phone.value.length <= 12;
  isEmailValid.value = email.value.length > 0 && email.value.length <= 40;

  if (isFirstNameValid.value && isLastNameValid.value && isPhoneValid.value && isEmailValid.value) {
    console.log('User info submitted', { firstName, lastName, phone, email }); // Temporary for development, replace with actual logic
    emit('proceed');
  }
};
</script>

<style scoped>
.wrapper-contact-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.user-info {
  padding: 1rem;
}

.user-info label {
  margin-bottom: 0.5rem;
}

.error-message {
  color: rgb(70, 55, 226);
  font-size: 0.875rem;
  margin-top: 0.5rem;
}
</style>
