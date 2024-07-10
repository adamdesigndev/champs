<!-- @format -->

<!-- CartEmpty.vue -->
<template>
  <div class="wrapper-order-confirmation">
    <p class="main-copy body-bottom-button">
      Cart is empty, lets help with that.
    </p>
    <button class="main-btn" @click="goMenu">Start Order</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goMenu = () => {
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

.wrapper-order-confirmation p {
  text-align: center;
  max-width: 600px;
}
</style>
