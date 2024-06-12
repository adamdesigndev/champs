<template>
    <div class="cart-food-item">
      <img :src="item.image" :alt="item.name">
      <div class="details">
        <h4>{{ item.name }}</h4>
        <p>Price: ${{ item.price }}</p>
        <p>Quantity: 1</p> <!-- For simplicity, assuming quantity as 1 -->
        <button @click="removeFromCart(item)">Remove</button>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    item: Object
  });
  
  const removeFromCart = (item) => {
    // Logic to remove item from cart
    console.log(`Removing ${item.name} from cart`);
  };
  </script>
  
  <style scoped>
  .cart-food-item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 1rem 0;
  }
  
  .cart-food-item img {
    width: 80px;
    margin-right: 1rem;
  }
  
  .cart-food-item .details {
    flex: 1;
  }
  
  .cart-food-item button {
    background-color: #ff0000;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  </style>