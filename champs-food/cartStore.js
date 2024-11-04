// cartStore.js
import { reactive, watchEffect } from 'vue';

// Initialize cart items from localStorage, if available
const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Reactive cart store with state and actions
export const cartStore = reactive({
  items: storedCartItems,          // Array to store cart items
  currentEditItem: null,           // Stores item currently being edited
  isEditing: false,                // Tracks if an item is in edit mode
  animationTrigger: 0,             // Triggers animations on cart changes

  /**
   * Adds a new item to the cart or updates quantity if item already exists
   * @param {Object} newItem - Item to add with properties like name, size, quantity, etc.
   */
  addToCart(newItem) {
    const existingItemIndex = this.items.findIndex(
      (item) => item.name === newItem.name && item.size === newItem.size
    );

    if (existingItemIndex !== -1) {
      // Update quantity and total price if item already exists
      this.items[existingItemIndex].quantity += newItem.quantity;
      this.items[existingItemIndex].totalPrice += newItem.totalPrice;
    } else {
      // Add new item, setting default images if none provided
      this.items.push({
        ...newItem,
        images: newItem.images || { small: '/images/food/default-small.png', large: '/images/food/default-large.png' }
      });
    }
    this.animationTrigger++; // Increment to trigger animations
  },

  /**
   * Removes a specified item from the cart
   * @param {Object} item - Item to remove
   */
  removeFromCart(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  },

  /**
   * Updates an existing item in the cart, merging quantities if necessary
   * @param {Object} updatedItem - Updated item with properties like name, size, quantity, etc.
   */
  updateCartItem(updatedItem) {
    const originalItemIndex = this.items.findIndex(
      (item) => item.name === updatedItem.name && item.size === this.currentEditItem.size
    );

    const newSizeItemIndex = this.items.findIndex(
      (item) => item.name === updatedItem.name && item.size === updatedItem.size
    );

    if (originalItemIndex !== -1) {
      if (newSizeItemIndex !== -1 && originalItemIndex !== newSizeItemIndex) {
        // Merge items if same name and size already exists
        this.items[newSizeItemIndex].quantity += updatedItem.quantity;
        this.items[newSizeItemIndex].totalPrice += updatedItem.totalPrice;
        this.removeFromCart(this.items[originalItemIndex]);
      } else {
        // Directly update the original item
        this.items[originalItemIndex] = updatedItem;
      }
    } else {
      this.addToCart(updatedItem);
    }
    this.clearCurrentEditItem();
  },

  /**
   * Sets the item to be edited and enables edit mode
   * @param {Object} item - Item to set as currently being edited
   */
  setCurrentEditItem(item) {
    this.currentEditItem = { ...item };
    this.isEditing = true;
  },

  /**
   * Clears the current edit item and exits edit mode
   */
  clearCurrentEditItem() {
    this.currentEditItem = null;
    this.isEditing = false;
  },

  /**
   * Clears all items from the cart
   */
  clearCart() {
    this.items.length = 0;
  }
});

// Watches for changes to the cart items and saves them to localStorage
watchEffect(() => {
  localStorage.setItem('cartItems', JSON.stringify(cartStore.items));
});