// cartStore.js
import { reactive, watchEffect } from 'vue';

const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

export const cartStore = reactive({
  items: storedCartItems,
  currentEditItem: null,
  isEditing: false,

  addToCart(newItem) {
    const existingItemIndex = this.items.findIndex(
      (item) =>
        item.name === newItem.name &&
        item.size === newItem.size
    );
    if (existingItemIndex !== -1) {
      this.items[existingItemIndex].quantity += newItem.quantity;
      this.items[existingItemIndex].totalPrice += newItem.totalPrice;
    } else {
      const cartItem = { ...newItem };
      this.items.push(cartItem);
    }
  },

  removeFromCart(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  },

  updateCartItem(updatedItem) {
    const originalItemIndex = this.items.findIndex(
      (item) => item.name === updatedItem.name
    );

    if (originalItemIndex !== -1) {
      this.items[originalItemIndex] = updatedItem;
    } else {
      this.addToCart(updatedItem); // In case the original item is not found, add it as a new item
    }
  },

  setCurrentEditItem(item) {
    this.currentEditItem = item;
    this.isEditing = true;
  },

  clearCurrentEditItem() {
    this.currentEditItem = null;
    this.isEditing = false;
  },
});

watchEffect(() => {
  localStorage.setItem('cartItems', JSON.stringify(cartStore.items));
});
