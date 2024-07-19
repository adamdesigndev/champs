// cartStore.js
import { reactive, watchEffect } from 'vue';

const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

export const cartStore = reactive({
  items: storedCartItems,
  currentEditItem: null,
  isEditing: false,
  animationTrigger: 0,

  addToCart(newItem) {
  const existingItemIndex = this.items.findIndex(
    (item) => item.name === newItem.name && item.size === newItem.size
  );

  if (existingItemIndex !== -1) {
    // If the item already exists, update the quantity and total price
    this.items[existingItemIndex].quantity += newItem.quantity;
    this.items[existingItemIndex].totalPrice += newItem.totalPrice;
  } else {
    this.items.push({ ...newItem, images: newItem.images || { small: '/images/food/default-small.png', large: '/images/food/default-large.png' } });
  }
  this.animationTrigger++;
}
,

  removeFromCart(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  },

  updateCartItem(updatedItem) {
    // Find the original item in the cart
    const originalItemIndex = this.items.findIndex(
      (item) => item.name === updatedItem.name && item.size === this.currentEditItem.size
    );

    // Find if there's an item with the same name and new size
    const newSizeItemIndex = this.items.findIndex(
      (item) => item.name === updatedItem.name && item.size === updatedItem.size
    );

    if (originalItemIndex !== -1) {
      if (newSizeItemIndex !== -1 && originalItemIndex !== newSizeItemIndex) {
        // Merge the quantities and total prices if the new size item already exists
        this.items[newSizeItemIndex].quantity += updatedItem.quantity;
        this.items[newSizeItemIndex].totalPrice += updatedItem.totalPrice;
        this.removeFromCart(this.items[originalItemIndex]);
      } else {
        // Update the original item if no merge is needed
        this.items[originalItemIndex] = updatedItem;
      }
    } else {
      this.addToCart(updatedItem);
    }
    this.clearCurrentEditItem();
  },

  setCurrentEditItem(item) {
    this.currentEditItem = { ...item };
    this.isEditing = true;
  },

  clearCurrentEditItem() {
    this.currentEditItem = null;
    this.isEditing = false;
  },

  clearCart() {
    this.items.length = 0;
  }
});

watchEffect(() => {
  localStorage.setItem('cartItems', JSON.stringify(cartStore.items));
});
