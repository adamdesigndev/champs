<!-- ThreeColumnSection.vue -->
<template>
  <section class="wrapper-basic-outer-section">
    <div class="wrapper-general">
      <!-- Header for the featured specials section -->
      <h2 class="header-2 fade-in-up" ref="header">Featured Specials</h2>
      
      <!-- Wrapper for three featured cards -->
      <div class="wrapper-three-up">
        <!-- Card 1: HOMESTYLE RANCH CHICKEN CLUB -->
        <router-link
          to="/food/HOMESTYLE%20RANCH%20CHICKEN%20CLUB"
          class="three-up-card-link"
        >
          <div class="three-up-card fade-in-up" ref="card1">
            <img src="/images/food/Homestyle-Ranch-Chicken-Club-medium.png" alt="" />
            <h3 class="header-4">HOMESTYLE RANCH CHICKEN CLUB</h3>
            <div class="main-copy body-bottom-button">
              100% all-white meat crispy chicken fillet with melty Swiss style
              cheese, hickory smoked bacon, lettuce, tomato & buttermilk ranch
              on a toasted brioche bun.
            </div>
            <p class="three-up-price">$5.99</p>
          </div>
        </router-link>

        <!-- Card 2: SOUTHWEST SALAD W/ CRISPY CHICKEN -->
        <router-link
          to="/food/SOUTHWEST%20SALAD%20W%2F%20CRISPY%20CHICKEN"
          class="three-up-card-link"
        >
          <div class="three-up-card fade-in-up" ref="card2">
            <img src="/images/food/SW_Salad_Crispy_Chicken_medium.png" alt="" />
            <h3 class="header-4">SOUTHWEST SALAD W/ CRISPY CHICKEN</h3>
            <div class="main-copy body-bottom-button">
              Mixed greens with crispy chicken strips, tomatoes, shredded
              carrots, shredded cheddar, roasted corn, black beans, tortilla
              strips & Southwest dressing.
            </div>
            <p class="three-up-price">$5.99</p>
          </div>
        </router-link>

        <!-- Card 3: Oreo® Shake -->
        <router-link to="/food/Oreo® Shake" class="three-up-card-link">
          <div class="three-up-card fade-in-up" ref="card3">
            <img src="/images/food/Oreo-Shake-medium.png" alt="" />
            <h3 class="header-4">Oreo® Shake</h3>
            <div class="main-copy body-bottom-button">
              Classic OREO® cookies pieces make this thick and creamy shake one of the best ways to have your milk and cookies.
            </div>
            <p class="three-up-price">$4.99</p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

// Refs for header and card elements to control staggered animations
const header = ref(null);
const card1 = ref(null);
const card2 = ref(null);
const card3 = ref(null);

/**
 * Triggers a staggered animation sequence for header and cards
 */
onMounted(() => {
  setTimeout(() => {
    header.value.classList.add('animate');
    setTimeout(() => {
      card1.value.classList.add('animate');
      setTimeout(() => {
        card2.value.classList.add('animate');
        setTimeout(() => {
          card3.value.classList.add('animate');
        }, 200); // Delay for Card 3
      }, 250); // Delay for Card 2
    }, 300); // Delay for Card 1
  }, 1000); // Initial delay for header
});
</script>

<style scoped>
/* Wrapper for three featured cards, setting up grid layout */
.wrapper-three-up {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* Styling for individual card */
.three-up-card {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  text-align: center;
  padding: 1rem;
}

/* Hover effect for card */
.three-up-card:hover {
  background-color: var(--clr-accent-creme);
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.35));
}

/* Card image styling */
.three-up-card img {
  max-height: 175px;
  margin-bottom: 2rem;
  margin-inline: auto;
}

/* Styling for price text in card */
.three-up-price {
  font-size: var(--fs-300);
  color: var(--clr-primary);
}

/* Keyframes and animation classes for fade-in-up effect */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Initial fade-in setup for components */
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
}

/* Trigger fade-in-up animation with 'animate' class */
.animate.fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}
</style>