// cartStore.js

import { reactive, watchEffect } from 'vue';

// Retrieve stored cart items from local storage, or initialize as an empty array if none exist
const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Define the reactive cart store
export const cartStore = reactive({
  // State properties
  items: storedCartItems,      // Array of items in the cart
  currentEditItem: null,       // Currently selected item for editing
  isEditing: false,            // Boolean flag to indicate if an item is being edited
  animationTrigger: 0,         // Counter to trigger animations

  // Methods

  // Add a new item to the cart or update an existing one
  addToCart(newItem) {
    // Check if the item already exists in the cart
    const existingItemIndex = this.items.findIndex(
      (item) => item.name === newItem.name && item.size === newItem.size
    );

    if (existingItemIndex !== -1) {
      // If the item already exists, update the quantity and total price
      this.items[existingItemIndex].quantity += newItem.quantity;
      this.items[existingItemIndex].totalPrice += newItem.totalPrice;
    } else {
      // If the item does not exist, add it to the cart with default images if not provided
      this.items.push({ 
        ...newItem, 
        images: newItem.images || { 
          small: '/images/food/default-small.png', 
          large: '/images/food/default-large.png' 
        } 
      });
    }
    // Trigger animation
    this.animationTrigger++;
  },

  // Remove an item from the cart
  removeFromCart(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  },

  // Update an existing cart item
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
      // If the original item does not exist, add the updated item to the cart
      this.addToCart(updatedItem);
    }
    // Clear the current edit item after update
    this.clearCurrentEditItem();
  },

  // Set the current item for editing
  setCurrentEditItem(item) {
    this.currentEditItem = { ...item };
    this.isEditing = true;
  },

  // Clear the current item being edited
  clearCurrentEditItem() {
    this.currentEditItem = null;
    this.isEditing = false;
  },

  // Clear all items from the cart
  clearCart() {
    this.items.length = 0;
  }
});

// Watch for changes in the cart items and update local storage
watchEffect(() => {
  localStorage.setItem('cartItems', JSON.stringify(cartStore.items));
});
