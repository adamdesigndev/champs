<!-- OrderConfirmation.vue -->
<template>
  <div class="wrapper-order-confirmation">
    <img
      src="/images/order-confirmed-check.svg"
      alt="Order Confirmed"
      class="order-confirmed-img"
    />
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

const goHome = () => {
  router.push("/");
};

onMounted(() => {
  setTimeout(() => {
    const img = document.querySelector('.order-confirmed-img');
    const text = document.querySelector('.order-confirmed-text');

    img.classList.add('fade-in-slide-down');
    text.classList.add('fade-in-slide-up');
  }, 200); // 1-second delay before starting the animation
});
</script>

<style scoped>
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

.fade-in-slide-down {
  animation: fadeInSlideDown 0.5s ease-in-out forwards;
}

.fade-in-slide-up {
  animation: fadeInSlideUp 0.5s ease-in-out forwards;
}

.wrapper-order-confirmation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.order-confirmed-img {
  max-width: 300px;
  margin-bottom: 2rem;
  opacity: 0; /* Start hidden */
}

.order-confirmed-text {
  text-align: center;
  max-width: 600px;
  opacity: 0; /* Start hidden */
}

.order-confirmed-text h1,
.order-confirmed-text p,
.order-confirmed-text button {
  margin-top: 1rem;
}

.order-confirmation button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
