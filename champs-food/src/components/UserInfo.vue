<template>
    <div class="user-info">
      <h3>User Information</h3>
      <form @submit.prevent="submitUserInfo">
        <label>
          First Name:
          <input type="text" v-model="firstName" required>
        </label>
        <label>
          Last Name:
          <input type="text" v-model="lastName" required>
        </label>
        <label>
          Phone:
          <input type="tel" v-model="phone" required>
        </label>
        <label>
          Email:
          <input type="email" v-model="email" required>
        </label>
        <button type="submit">Next</button>
      </form>
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
  .user-info {
    padding: 1rem;
  }
  
  .user-info form {
    display: flex;
    flex-direction: column;
  }
  
  .user-info label {
    margin-bottom: 0.5rem;
  }
  
  .user-info button {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-top: 1rem;
  }
  </style>