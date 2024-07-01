// cartStore.js
import { reactive, watchEffect } from 'vue';

const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

export const cartStore = reactive({
  items: storedCartItems,
  addToCart(newItem) {
    const existingItemIndex = this.items.findIndex(
      (item) =>
        item.name === newItem.name &&
        item.size === newItem.size
    );
    if (existingItemIndex !== -1) {
      // If item exists, update its quantity and total price
      this.items[existingItemIndex].quantity += newItem.quantity;
      this.items[existingItemIndex].totalPrice += newItem.totalPrice;
    } else {
      // If item does not exist, add it to the cart
      const cartItem = { ...newItem }; // Use spread operator to create a shallow copy
      this.items.push(cartItem);
    }
    console.log('Item added to cart:', newItem); // Log the item being added
    console.log('Current cart state:', this.items); // Log the current state of the cart
  },
  removeFromCart(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
      console.log('Item removed from cart:', item); // Log the item being removed
      console.log('Current cart state:', this.items); // Log the current state of the cart
    }
  },
});

// Persist the cart state to localStorage whenever it changes
watchEffect(() => {
  localStorage.setItem('cartItems', JSON.stringify(cartStore.items));
});


