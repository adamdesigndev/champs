<template>
    <section class="wrapper-outer-hero-home">
      <div class="wrapper-inner-hero-content wrapper-general">
        <div class="wrapper-inner-hero-left">
          <h1 class="header-1">Welcome Champs</h1>
        <p class="body-bottom-button">Delicious food, ready to serve!</p>
        <button class="main-btn">Start Order</button>
        </div>
        <div class="wrapper-inner-hero-right">
        <img class="two-up-section-image" src="/images/grilledClub_colbyJack_PDP.png" alt="Delicious food">
      </div>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .wrapper-outer-hero-home {
    background-color: var(--clr-accent-creme);
    display: flex;
    justify-content: center;
    padding: var(--wrapper-outer-padding-tb);
  }

  .wrapper-inner-hero-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--content-gap);
  }
  
  .hero-image img {
    width: 100%;
    max-width: 400px;
  }
  </style>