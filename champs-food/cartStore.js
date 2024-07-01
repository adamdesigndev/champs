// cartStore.js
import { reactive } from 'vue';

export const cartStore = reactive({
  items: [],
  addToCart(item) {
    this.items.push(item);
  },
  removeFromCart(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  },
});
