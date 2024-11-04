<!-- OrderConfirmation.vue -->
<template>
  <div class="wrapper-order-confirmation">
    <!-- Confirmation Image -->
    <img
      src="/images/order-confirmed-check.svg"
      alt="Order Confirmed"
      class="order-confirmed-img"
    />

    <!-- Confirmation Text and Return Button -->
    <div class="order-confirmed-text">
      <h1 class="header-2">Order Complete!</h1>
      <p class="main-copy body-bottom-button">
        Thank you for your order. You will receive a confirmation shortly.
      </p>
      <button class="main-btn" @click="goHome">Back to Home</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();

/**
 * Navigates the user back to the home page
 */
const goHome = () => {
  router.push("/");
};

/**
 * Triggers fade-in animations for image and text on mount
 */
onMounted(() => {
  setTimeout(() => {
    const img = document.querySelector('.order-confirmed-img');
    const text = document.querySelector('.order-confirmed-text');

    img.classList.add('fade-in-slide-down');
    text.classList.add('fade-in-slide-up');
  }, 350); // 0.35-second delay before starting the animation
});
</script>

<style scoped>
/* Fade-in slide-down animation for confirmation image */
@keyframes fadeInSlideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade-in slide-up animation for confirmation text */
@keyframes fadeInSlideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation classes */
.fade-in-slide-down {
  animation: fadeInSlideDown 0.5s ease-in-out forwards;
}

.fade-in-slide-up {
  animation: fadeInSlideUp 0.5s ease-in-out forwards;
}

/* Wrapper for confirmation layout */
.wrapper-order-confirmation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* Styling for confirmation image */
.order-confirmed-img {
  max-width: 300px;
  margin-bottom: 2rem;
  opacity: 0; /* Hidden initially for fade-in */
}

/* Styling for confirmation text */
.order-confirmed-text {
  text-align: center;
  max-width: 600px;
  opacity: 0; /* Hidden initially for fade-in */
}

.order-confirmed-text h1,
.order-confirmed-text p,
.order-confirmed-text button {
  margin-top: 1rem;
}

/* Styling for return button */
.order-confirmation button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>