<template>
    <div class="user-info">
      <h2 class="header-4">Contact Info</h2>
      <form class="wrapper-contact-form body-bottom-button" @submit.prevent="submitUserInfo">
        <label class="form-label">
          First Name
          <input class="form-input" type="text" v-model="firstName" required>
        </label>
        <label class="form-label">
          Last Name
          <input class="form-input" type="text" v-model="lastName" required>
        </label>
        <label class="form-label">
          Phone
          <input class="form-input" type="tel" v-model="phone" required>
        </label>
        <label class="form-label">
          Email
          <input class="form-input" type="email" v-model="email" required>
        </label>
      </form>
      <button class="main-btn" type="submit">Proceed to Payment</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const firstName = ref('');
  const lastName = ref('');
  const phone = ref('');
  const email = ref('');
  
  const submitUserInfo = () => {
    console.log('User info submitted', { firstName, lastName, phone, email }); // Temporary for development, replace with actual logic
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

  </style>