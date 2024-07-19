<!-- CartFoodItem.vue -->
<template>
  <div class="wrapper-cart-single-item" ref="cartItem">
    <img :src="item.images.small" :alt="item.name" />
    <div class="main-cart-item-details">
      <h4 class="header-6 cart-item-name">{{ item.name }}</h4>
      <div class="wrapper-size-quantity">
        <p class="size-quantity-header" v-if="item.sizes">
          Size: <span>{{ item.size }}</span>
        </p>
        <p class="size-quantity-header">
          Qty: <span>{{ item.quantity }}</span>
        </p>
      </div>
      <div class="wrapper-cart-item-buttons">
        <button class="cart-item-buttons" @click="editItem(item)">Edit</button>
        <button class="cart-item-buttons" @click="handleRemove">Remove</button>
      </div>
    </div>
    <p class="cart-item-price">${{ item.totalPrice.toFixed(2) }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { cartStore } from "../../cartStore";

const props = defineProps({
  item: Object,
});

const router = useRouter();
const cartItem = ref(null);

const removeFromCart = (item) => {
  cartStore.removeFromCart(item);
};

const editItem = (item) => {
  cartStore.setCurrentEditItem(item);
  router.push({ name: 'SingleFoodItem', params: { name: item.name }, query: { edit: true } });
};

const handleRemove = () => {
  cartItem.value.classList.add('slide-out');
  setTimeout(() => {
    removeFromCart(props.item);
  },800); // Match the duration of the animation
};
</script>

<style scoped>
.wrapper-cart-single-item {
  display: grid;
  grid-template-columns: 2fr 5fr 1fr;
  gap: 1.5rem;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 1.5rem;
  transition: transform 0.3s ease-out, opacity 0.8s ease-out;
}

.wrapper-cart-single-item.slide-out {
  transform: translateX(10px);
  opacity: 0;
}

.main-cart-item-details {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.cart-item-name {
  margin-bottom: 0rem;
}

.size-quantity-header {
  font-size: var(--fs-200);
}

.size-quantity-header span {
  font-weight: 600;
}

.wrapper-cart-item-buttons {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.cart-item-buttons {
  font-size: var(--fs-200);
  background-color: rgb(0, 0, 0, 0);
  padding: 0rem;
  min-width: 3rem;
  text-align: left;
  line-height: 1rem;
  border: none;
  color: var(--clr-primary);
  cursor: pointer;
}

.cart-item-price {
  font-size: var(--fs-200);
  font-weight: 600;
  text-align: right;
  line-height: 1rem;
}
</style>
