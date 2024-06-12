<template>
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to Fast Food Restaurant</h1>
        <p>Delicious food, ready to serve!</p>
      </div>
      <div class="hero-image">
        <img src="/images/hero-image.jpg" alt="Delicious food">
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--primary-color);
    padding: 2rem;
  }
  
  .hero-content {
    flex: 1;
  }
  
  .hero-image img {
    width: 100%;
    max-width: 400px;
  }
  </style>