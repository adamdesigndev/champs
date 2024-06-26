<template>
    <div class="wrapper-cart-single-item">
      <img src="/images/grilledClub_colbyJack_PDP.png" :alt="item.name">
      <div class="main-cart-item-details">
        <h4 class="header-6 cart-item-name">{{ item.name }}</h4>
        <div class="wrapper-size-quantity">
          <p class="size-quantity-header">Size: <span>Medium</span></p>
          <p class="size-quantity-header">Qty: <span>1</span></p>
        </div>
        <div class="wrapper-cart-item-buttons">
          <button class="cart-item-buttons" @click="removeFromCart(item)">Edit</button>
        <button class="cart-item-buttons" @click="removeFromCart(item)">Remove</button>
        </div>
      </div>
      <p class="cart-item-price">${{ item.price }}</p>
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
 .wrapper-cart-single-item {
  display: grid;
  grid-template-columns: 2fr 4fr 1fr;
  gap: 2rem;
  border-bottom: 1px solid #cacaca;
  padding-bottom: 1.5rem;
 }

 .main-cart-item-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
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
  background-color: rgb(0,0,0,0);
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