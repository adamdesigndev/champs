<!-- CartFoodItem.vue -->
<template>
  <div class="wrapper-cart-single-item" ref="cartItem">
    <img :src="item.images.small" :alt="item.name" />
    <div class="main-cart-item-details">
      <h4 class="header-6 cart-item-name">{{ item.name }}</h4>

      <!-- Size and Quantity Information -->
      <div class="wrapper-size-quantity">
        <p class="size-quantity-header" v-if="item.sizes">
          Size: <span>{{ capitalizeFirstLetter(item.size) }}</span>
        </p>
        <p class="size-quantity-header">
          Qty: <span>{{ item.quantity }}</span>
        </p>
      </div>

      <!-- Edit and Remove Buttons -->
      <div class="wrapper-cart-item-buttons">
        <button class="cart-item-buttons" @click="editItem(item)">Edit</button>
        <button class="cart-item-buttons" @click="handleRemove">Remove</button>
      </div>
    </div>

    <!-- Total Price Display -->
    <p class="cart-item-price">${{ item.totalPrice.toFixed(2) }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { cartStore } from "../../cartStore";

// Define props for the component
const props = defineProps({
  item: Object,
});

const router = useRouter();
const cartItem = ref(null);

/**
 * Removes an item from the cart
 * @param {Object} item - The item to remove from the cart
 */
const removeFromCart = (item) => {
  cartStore.removeFromCart(item);
};

/**
 * Navigates to the item's page for editing
 * @param {Object} item - The item to edit
 */
const editItem = (item) => {
  cartStore.setCurrentEditItem(item);
  router.push({ name: 'SingleFoodItem', params: { name: item.name }, query: { edit: true } });
};

/**
 * Capitalizes the first letter of a string
 * @param {String} string - The string to capitalize
 * @returns {String} - Capitalized string
 */
const capitalizeFirstLetter = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Handles remove animation before item is removed from cart
 */
const handleRemove = () => {
  cartItem.value.classList.add('slide-out');
  setTimeout(() => {
    removeFromCart(props.item);
  }, 800); // Matches the CSS transition duration
};
</script>

<style scoped>
/* Cart item wrapper with animation for removal */
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

/* Main details styling */
.main-cart-item-details {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.cart-item-name {
  margin-bottom: 0;
}

/* Size and quantity styling */
.size-quantity-header {
  font-size: var(--fs-200);
}
.size-quantity-header span {
  font-weight: 600;
}

/* Button styling */
.wrapper-cart-item-buttons {
  display: flex;
  gap: 1rem;
}
.cart-item-buttons {
  font-size: var(--fs-200);
  background-color: transparent;
  padding: 0;
  min-width: 2rem;
  text-align: left;
  line-height: 1rem;
  border: none;
  color: var(--clr-primary);
  cursor: pointer;
}

/* Price display styling */
.cart-item-price {
  font-size: var(--fs-200);
  font-weight: 600;
  text-align: right;
  line-height: 1rem;
}

/* Responsive adjustments */
@media (width < 500px) {
  .main-cart-item-details {
    gap: 0.3rem;
  }

  .wrapper-cart-single-item {
    grid-template-columns: 1fr 3fr 1fr;
    gap: 0;
  }
}
</style>