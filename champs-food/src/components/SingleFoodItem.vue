<!-- SingleFoodItem.vue -->
<template>
  <div v-if="item">
    <div class="wrapper-menu-outer-section">
      <div class="wrapper-general">
        <div class="wrapper-with-info-card-right">
          <img :src="item.image" :alt="item.name">
          <div class="single-food-item-buy-card">
            <div>
              <h3 class="header-5">{{ item.name }}</h3>
              <p class="main-copy">{{ item.description }}</p>
            </div>
            <div v-if="item.sizes">
              <h6 class="header-6">Select size</h6>
              <div class="wrapper-size-selecter">
                <button class="single-size">
                  <div class="size-square"><p>S</p></div>
                  <div class="size-square-text-below">Small</div>
                </button>
                <button class="single-size">
                  <div class="size-square"><p>M</p></div>
                  <div class="size-square-text-below">Medium</div>
                </button>
                <button class="single-size">
                  <div class="size-square"><p>L</p></div>
                  <div class="size-square-text-below">Large</div>
                </button>
              </div>
            </div>
            <div class="wrapper-qauntity-add-to-cart">
              <div class="wrapper-quanitity">
                <p class="header-quanitity">Quanitity</p>
                <div class="quanitiy-picker">
                  <button class="minus-qty">-</button>
                  <p class="food-item-amount-number">3</p>
                  <button class="plus-qty">+</button>
                </div>
              </div>
              <button class="main-btn add-item-with-price" @click="addToCart(item)">
                <p>Add To Cart</p>
                <p class="single-item-price-in-button"></p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p> <!-- Optional loading message -->
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  item: Object
});

const selectedSize = ref(props.item && props.item.sizes ? Object.keys(props.item.sizes)[0] : null);

const addToCart = (item) => {
  console.log('Adding to cart', { item, size: selectedSize.value }); // Temporary for development, replace with actual cart logic
};

// Watch for changes in the item prop to set the default size
watch(() => props.item, (newItem) => {
  if (newItem && newItem.sizes) {
    selectedSize.value = Object.keys(newItem.sizes)[0];
  }
});
</script>

<style scoped>
.wrapper-size-selecter {
  display: flex;
  flex-direction: row;
  gap: .8rem;
}

.single-size {
  background-color: rgba(0,0,0,0);
  border: none;
  cursor: pointer;
}

.size-square-text-below {
  font-size: var(--fs-200);
}

.size-square {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-primary-100);
  height: 60px;
  width: 60px;
  color: #000;
  font-weight: 600;
}

.size-square:hover {
  background-color: var(--clr-primary);
  color: #fff;
}

.single-food-item-buy-card {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: var(--clr-accent-creme);
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 .5rem 1rem rgba(73,73,73,.25);
}

.single-food-item img {
  width: 100%;
}

.wrapper-qauntity-add-to-cart {
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

.wrapper-quanitity {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
.header-quanitity {
  font-family: var(--ff-headers);
  font-size: var(--fs-300);
  font-weight: 900;
  text-transform: uppercase;
  color: var(--clr-body);
}

.quanitiy-picker {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 200px;
}

.quanitiy-picker button {
  padding: 0rem .8rem;
  border: none;
  background-color: rgb(0,0,0,0);
  font-size: var(--fs-500);
}

.food-item-amount-number {
  text-align: center;
  font-size: var(--fs-400);
}

.single-food-item button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 1rem;
}

.add-item-with-price {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
}
</style>