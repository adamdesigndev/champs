<!-- SingleFoodItem.vue -->
<template>
  <div v-if="item">
    <div class="wrapper-menu-outer-section">
      <div class="wrapper-general">
        <div class="wrapper-with-info-card-right">
          <div>
            <!-- Link to go back to the menu -->
            <router-link :to="'/menu'" class="back-menu"><span class="back-arrow"><</span> Menu</router-link>
            <!-- Picture element for responsive images -->
            <picture>
              <source :srcset="item.images.medium" media="(max-width: 850px)" />
              <img :src="item.images.large" :alt="item.name" ref="image" class="fade-in-left" />
            </picture>
          </div>
          <!-- Buy card with food item details and actions -->
          <div class="single-food-item-buy-card fade-in-down" ref="buyCard">
            <div ref="buyCardContent" class="content-wrapper">
              <h3 class="header-4 fade-in-up">{{ item.name }}</h3>
              <p class="main-copy fade-in-up">{{ item.description }}</p>
            </div>
            <div v-if="item.sizes" class="fade-in-up">
              <h6 class="header-6">Select size</h6>
              <div class="wrapper-size-selecter">
                <!-- Buttons to select the size of the food item -->
                <button
                  class="single-size"
                  :class="{ 'selected-size': selectedSize === 'small' }"
                  @click="selectSize('small')"
                >
                  <div class="size-square"><p>S</p></div>
                  <div class="size-square-text-below">Small</div>
                </button>
                <button
                  class="single-size"
                  :class="{ 'selected-size': selectedSize === 'medium' }"
                  @click="selectSize('medium')"
                >
                  <div class="size-square"><p>M</p></div>
                  <div class="size-square-text-below">Medium</div>
                </button>
                <button
                  class="single-size"
                  :class="{ 'selected-size': selectedSize === 'large' }"
                  @click="selectSize('large')"
                >
                  <div class="size-square"><p>L</p></div>
                  <div class="size-square-text-below">Large</div>
                </button>
              </div>
            </div>
            <div class="wrapper-qauntity-add-to-cart fade-in-up">
              <div class="wrapper-quanitity">
                <h6 class="header-6 header-quanitity">Quantity</h6>
                <div class="quanitiy-picker">
                  <!-- Buttons to adjust the quantity of the food item -->
                  <button class="minus-qty" @click="updateQuantity(-1)">-</button>
                  <p class="food-item-amount-number">{{ quantity }}</p>
                  <button class="plus-qty" @click="updateQuantity(1)">+</button>
                </div>
              </div>
              <!-- Button to add or update the cart with the selected food item -->
              <button
                class="main-btn add-item-with-price"
                @click="addOrUpdateCart(item)"
              >
                <p>{{ isEditing ? 'Update' : 'Add To Cart' }}</p>
                <p class="single-item-price-in-button">
                  {{ totalPriceFormatted }}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useRoute, useRouter } from 'vue-router';
import { cartStore } from "../../cartStore";

// Props definition
const props = defineProps({
  item: Object,
});

const route = useRoute();
const router = useRouter();
const isEditing = ref(false);

// Default selected size and quantity
const selectedSize = ref("medium");
const quantity = ref(1);
const initialLoad = ref(true);

// Function to select size
const selectSize = (size) => {
  selectedSize.value = size;
};

// Function to update quantity
const updateQuantity = (amount) => {
  quantity.value = Math.max(1, quantity.value + amount); // Ensure quantity is at least 1
};

// Computed property for total price based on selected size and quantity
const totalPrice = computed(() => {
  if (props.item.sizes) {
    return quantity.value * props.item.sizes[selectedSize.value];
  } else {
    return quantity.value * props.item.price;
  }
});

// Computed property for formatted total price
const totalPriceFormatted = computed(() => {
  return `$${totalPrice.value.toFixed(2)}`;
});

// Function to add or update cart with the current item
const addOrUpdateCart = (item) => {
  const cartItem = {
    ...item,
    size: selectedSize.value,
    quantity: quantity.value,
    totalPrice: totalPrice.value,
  };
  if (isEditing.value) {
    cartStore.updateCartItem(cartItem);
    router.push({ name: 'Cart' });
  } else {
    cartStore.addToCart(cartItem);
    router.push({ name: 'Menu' });
  }
};

// Mounted hook to handle animations and initialize the component state
onMounted(() => {
  setTimeout(() => {
    initialLoad.value = false;
    document.querySelector('.fade-in-left').classList.add('animate');
    document.querySelector('.fade-in-down').classList.add('animate');
    setTimeout(() => {
      const fadeUpElements = document.querySelectorAll('.fade-in-up');
      fadeUpElements.forEach(el => el.classList.add('animate'));
    }, 0); // Delay before starting the child elements animation
  }, 500); // 1-second delay before starting the animation
});

// Watch for route query and initialize editing state if applicable
if (route.query.edit && cartStore.isEditing && cartStore.currentEditItem) {
  const { size, quantity: editQuantity } = cartStore.currentEditItem;
  selectedSize.value = size;
  quantity.value = editQuantity;
  isEditing.value = true;
}

// Watch for changes in the item prop to set the default size
watch(
  () => props.item,
  (newItem) => {
    if (newItem && newItem.sizes) {
      selectedSize.value =
        "medium" in newItem.sizes ? "medium" : Object.keys(newItem.sizes)[0];
    }
  }
);
</script>


<style scoped>
.wrapper-size-selecter {
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
}

.single-size {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
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
  border: 2px solid transparent;
}

.selected-size .size-square {
  background-color: var(--clr-primary);
  color: #fff;
}

.size-square-text-below {
  font-size: var(--fs-200);
  color: var(--clr-body);
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
  box-shadow: 0 0.5rem 1rem rgba(73, 73, 73, 0.25);
  align-self: start;
  opacity: 0;
  transform: translateY(-20px);
}

@media (width < 851px) {
  .single-food-item-buy-card {
  gap: 1.5rem;
  background-color: rgb(0, 0, 0, 0);
  padding: 0rem;
  box-shadow: none;

}
}

.single-food-item img {
  width: 100%;
  opacity: 0;
  transform: translateX(-20px);
}

.wrapper-qauntity-add-to-cart {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.wrapper-quanitity {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.header-quanitity {
  margin-bottom: 0rem;
}

.quanitiy-picker {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 200px;
}

.quanitiy-picker button {
  padding: 0rem 0.8rem;
  border: none;
  background-color: rgb(0, 0, 0, 0);
  font-size: var(--fs-500);
  font-weight: 500;
  color: var(--clr-body);
  cursor: pointer;
}

.food-item-amount-number {
  text-align: center;
  font-size: var(--fs-500);
  margin: auto;
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
.back-menu{
 font-size: var(--fs-300);
 font-weight: 600;
 color: var(--clr-body);
}
.back-arrow {
  font-size: var(--fs-400);
  color: var(--clr-primary);
}

/* Slide-in fade-in from left animation */
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fade-in-left {
  opacity: 0;
  transform: translateX(-20px);
}

.animate.fade-in-left {
  animation: fadeInLeft .5s ease-out forwards;
}

/* Slide-down fade-in animation */
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-down {
  opacity: 0;
  transform: translateY(-20px);
}

.animate.fade-in-down {
  animation: fadeInDown .5s ease-out forwards;
}

/* Slide-up fade-in animation */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(0px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  opacity: 0;
  transform: translateY(00px);
}

.animate.fade-in-up {
  animation: fadeInUp .5s ease-out forwards;
}
</style>
