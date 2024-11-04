<!-- UserInfo.vue -->
<template>
  <div class="user-info">
    <h2 class="header-4 user-info-stagger">Contact Info</h2>
    <form class="wrapper-contact-form body-bottom-button" @submit.prevent="submitUserInfo">
      <!-- First Name Input -->
      <label class="form-label user-info-stagger">
        First Name
        <input class="form-input" type="text" v-model="userInfo.firstName" required maxlength="40">
        <span v-if="!isFirstNameValid && showErrors" class="error-message">Please input a valid first name</span>
      </label>

      <!-- Last Name Input -->
      <label class="form-label user-info-stagger">
        Last Name
        <input class="form-input" type="text" v-model="userInfo.lastName" required maxlength="40">
        <span v-if="!isLastNameValid && showErrors" class="error-message">Please input a valid last name</span>
      </label>

      <!-- Phone Input with Validation -->
      <label class="form-label user-info-stagger">
        Phone
        <input class="form-input" type="tel" v-model="userInfo.phone" required maxlength="12" @input="validatePhone">
        <span v-if="!isPhoneValid && showErrors" class="error-message">Please input a valid phone number</span>
      </label>

      <!-- Email Input -->
      <label class="form-label user-info-stagger">
        Email
        <input class="form-input" type="email" v-model="userInfo.email" required maxlength="40">
        <span v-if="!isEmailValid && showErrors" class="error-message">Please input a valid email</span>
      </label>

      <!-- Submit Button -->
      <button class="main-btn user-info-stagger" type="submit">Proceed to Payment</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCheckoutStore } from '../../useCheckoutStore.js';

// Accesses shared state for user info from checkout store
const { userInfo } = useCheckoutStore();

const isFirstNameValid = ref(true);
const isLastNameValid = ref(true);
const isPhoneValid = ref(true);
const isEmailValid = ref(true);
const showErrors = ref(false);

const emit = defineEmits(['proceed']); // Emits 'proceed' event to parent component

/**
 * Validates phone input to ensure only numbers are allowed
 * @param {Event} event - Input event from phone field
 */
const validatePhone = (event) => {
  const value = event.target.value.replace(/[^0-9]/g, '').slice(0, 12);
  userInfo.phone = value;
  isPhoneValid.value = value.length >= 7;
};

/**
 * Validates all fields and emits 'proceed' if data is valid
 */
const submitUserInfo = () => {
  showErrors.value = true;
  isFirstNameValid.value = userInfo.firstName.length > 0 && userInfo.firstName.length <= 40;
  isLastNameValid.value = userInfo.lastName.length > 0 && userInfo.lastName.length <= 40;
  isPhoneValid.value = userInfo.phone.length >= 7 && userInfo.phone.length <= 12;
  isEmailValid.value = userInfo.email.length > 0 && userInfo.email.length <= 40;

  if (isFirstNameValid.value && isLastNameValid.value && isPhoneValid.value && isEmailValid.value) {
    emit('proceed');
  }
};

/**
 * Stagger animation for form fields
 * @param {number} delay - Initial delay before animations start
 */
const applyStaggerEffect = (delay) => {
  const elements = document.querySelectorAll('.user-info-stagger');
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('staggered');
    }, index * 100); // Stagger each element by 100ms
  });
};

// On mount, apply staggered animation based on screen width and initial load
onMounted(() => {
  const firstLoad = localStorage.getItem('cartFirstLoad') === 'true';
  const screenWidth = window.innerWidth;

  if (firstLoad) {
    localStorage.removeItem('cartFirstLoad');
    if (screenWidth < 850) {
      applyStaggerEffect(0);
    } else {
      setTimeout(() => applyStaggerEffect(700), 700); // Delay start of animation by 0.7s
    }
  } else {
    applyStaggerEffect(0);
  }
});
</script>

<style scoped>
/* Keyframes for fade-in and fade-out animations */
@keyframes fadeInUpUserInfo {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeOutUpUserInfo {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-20px); }
}

/* Initial style for staggered elements */
.user-info-stagger {
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
}

/* Applied class for staggered animation */
.user-info-stagger.staggered {
  animation: fadeInUpUserInfo 0.3s forwards;
}

.fade-slide-leave-active {
  animation: fadeOutUpUserInfo 0.3s forwards;
}

/* Layout for the contact form */
.wrapper-contact-form {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  gap: 1rem;
}

/* Styling for error messages */
.error-message {
  color: rgb(70, 55, 226);
  font-size: 0.875rem;
  margin-top: 0.5rem;
}
</style>