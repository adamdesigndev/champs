<template>
    <section class="wrapper-basic-outer-section">
      <div class="wrapper-general">
        <h2 class="header-2">Daily Specials</h2>
        <div class="wrapper-three-up">
        <div class="three-up-card">
          <img src="/images/grilledClub_colbyJack_PDP.png" alt="">
          <h3 class="header-5">Big Chick Ranch</h3>
          <div class="main-copy body-bottom-button">This is s abiog juciy chciken candwich with lots of flavour and heat that you will enjoy!</div>
          <p class="three-up-price">$5.99</p>
        </div>

        <div class="three-up-card">
          <img src="/images/grilledClub_colbyJack_PDP.png" alt="">
          <h3 class="header-5">Big Chick Ranch</h3>
          <div class="main-copy body-bottom-button">This is s abiog juciy chciken candwich with lots of flavour and heat that you will enjoy!</div>
          <p class="three-up-price">$5.99</p>
        </div>

        <div class="three-up-card">
          <img src="/images/grilledClub_colbyJack_PDP.png" alt="">
          <h3 class="header-5">Big Chick Ranch</h3>
          <div class="main-copy body-bottom-button">This is s abiog juciy chciken candwich with lots of flavour and heat that you will enjoy!</div>
          <p class="three-up-price">$5.99</p>
        </div>
      </div>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
.wrapper-three-up {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.three-up-card {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: var(--clr-accent-creme);
  padding: 2rem;
  filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.35));
}

.three-up-card img {
  max-width: 15rem;
  margin-bottom: 2rem;
  margin-inline: auto;
  width: 100%;
}

.three-up-price {
  color: var(--clr-primary);
}

  </style>