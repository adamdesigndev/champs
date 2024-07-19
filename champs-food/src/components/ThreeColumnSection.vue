<!-- @format -->
<!-- ThreeColumnSection.vue -->
<template>
  <section class="wrapper-basic-outer-section">
    <div class="wrapper-general">
      <h2 class="header-2 fade-in-up" ref="header">Featured Specials</h2>
      <div class="wrapper-three-up">
        <router-link
          to="/food/HOMESTYLE%20RANCH%20CHICKEN%20CLUB"
          class="three-up-card-link"
        >
          <div class="three-up-card fade-in-up" ref="card1">
            <img src="/images/food/Homestyle-Ranch-Chicken-Club-small.png" alt="" />
            <h3 class="header-4">HOMESTYLE RANCH CHICKEN CLUB</h3>
            <div class="main-copy body-bottom-button">
              100% all-white meat crispy chicken fillet with melty Swiss style
              cheese, hickory smoked bacon, lettuce, tomato & buttermilk ranch
              on a toasted brioche bun.
            </div>
            <p class="three-up-price">$5.99</p>
          </div>
        </router-link>

        <router-link
          to="/food/SOUTHWEST%20SALAD%20W%2F%20CRISPY%20CHICKEN"
          class="three-up-card-link"
        >
          <div class="three-up-card fade-in-up" ref="card2">
            <img src="/images/food/SW_Salad_Crispy_Chicken_small.png" alt="" />
            <h3 class="header-4">SOUTHWEST SALAD W/ CRISPY CHICKEN</h3>
            <div class="main-copy body-bottom-button">
              Mixed greens with crispy chicken strips, tomatoes, shredded
              carrots, shredded cheddar, roasted corn, black beans, tortilla
              strips & Southwest dressing.
            </div>
            <p class="three-up-price">$5.99</p>
          </div>
        </router-link>

        <router-link
          to="/food/Bacon,%20Egg%20&%20Cheese%20Muffin"
          class="three-up-card-link"
        >
          <div class="three-up-card fade-in-up" ref="card3">
            <img src="/images/food/Oreo-Shake-small.png" alt="" />
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

const header = ref(null);
const card1 = ref(null);
const card2 = ref(null);
const card3 = ref(null);

onMounted(() => {
  setTimeout(() => {
    header.value.classList.add('animate');
    setTimeout(() => {
      card1.value.classList.add('animate');
      setTimeout(() => {
        card2.value.classList.add('animate');
        setTimeout(() => {
          card3.value.classList.add('animate');
        }, 200);
      }, 250);
    }, 300);
  }, 1000); // 1.5 seconds delay for header animation to complete
});
</script>

<style scoped>
.wrapper-three-up {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.three-up-card {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  text-align: center;
  padding: 1rem;
}

.three-up-card:hover {
  background-color: var(--clr-accent-creme);
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.35));
}

.three-up-card img {
  max-height: 100px;
  margin-bottom: 2rem;
  margin-inline: auto;
}

.three-up-price {
  font-size: var(--fs-300);
  color: var(--clr-primary);
}

/* Fade-in animations */
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

.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
}

.animate.fade-in-up {
  animation: fadeInUp .6s ease-out forwards;
}
</style>
