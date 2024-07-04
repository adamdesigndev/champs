<!-- @format -->

<!-- CartEmpty.vue -->
<template>
  <div class="wrapper-order-confirmation">
    <p class="main-copy body-bottom-button">
      Cart is empty, lets take care of that.
    </p>
    <button class="main-btn" @click="goHome">Start Order</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goHome = () => {
  router.push("/Menu");
};
</script>

<style scoped>
.wrapper-order-confirmation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.wrapper-order-confirmation img {
  max-width: 300px;
  margin-bottom: 2rem;
}

.wrapper-order-confirmation p {
  text-align: center;
  max-width: 600px;
}
</style>
