<!-- @format -->
<!-- SingleFoodItem.vue -->
<template>
  <div v-if="item">
    <div class="wrapper-menu-outer-section">
      <div class="wrapper-general">
        <div class="wrapper-with-info-card-right">
          <img :src="item.image" :alt="item.name" />
          <div class="single-food-item-buy-card">
            <div>
              <h3 class="header-4">{{ item.name }}</h3>
              <p class="main-copy">{{ item.description }}</p>
            </div>
            <div v-if="item.sizes">
              <h6 class="header-6">Select size</h6>
              <div class="wrapper-size-selecter">
                <button
                  class="single-size"
                  :class="{ selected: selectedSize.value === 'small' }"
                  @click="selectSize('small')"
                >
                  <div class="size-square"><p>S</p></div>
                  <div class="size-square-text-below">Small</div>
                </button>
                <button
                  class="single-size"
                  :class="{ selected: selectedSize.value === 'medium' }"
                  @click="selectSize('medium')"
                >
                  <div class="size-square"><p>M</p></div>
                  <div class="size-square-text-below">Medium</div>
                </button>
                <button
                  class="single-size"
                  :class="{ selected: selectedSize.value === 'large' }"
                  @click="selectSize('large')"
                >
                  <div class="size-square"><p>L</p></div>
                  <div class="size-square-text-below">Large</div>
                </button>
              </div>
            </div>
            <div class="wrapper-qauntity-add-to-cart">
              <div class="wrapper-quanitity">
                <p class="header-quanitity">Quantity</p>
                <div class="quanitiy-picker">
                  <button class="minus-qty" @click="updateQuantity(-1)">
                    -
                  </button>
                  <p class="food-item-amount-number">{{ quantity }}</p>
                  <button class="plus-qty" @click="updateQuantity(1)">+</button>
                </div>
              </div>
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
    <!-- Optional loading message -->
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useRoute, useRouter } from 'vue-router';
import { cartStore } from "../../cartStore";

const props = defineProps({
  item: Object,
});

const route = useRoute();
const router = useRouter();
const isEditing = ref(false);

const selectedSize = ref("medium"); // Default to 'medium'
const quantity = ref(1);

const saveState = () => {
  localStorage.setItem(
    `itemState_${props.item.name}`,
    JSON.stringify({
      selectedSize: selectedSize.value,
      quantity: quantity.value,
      totalPrice: totalPrice.value,
    })
  );
};

const loadState = () => {
  const savedState = localStorage.getItem(`itemState_${props.item.name}`);
  if (savedState) {
    const { selectedSize: savedSize, quantity: savedQuantity } = JSON.parse(
      savedState
    );
    selectedSize.value = savedSize;
    quantity.value = savedQuantity;
  }
};

const resetState = () => {
  selectedSize.value = "medium"; // Reset to default size
  quantity.value = 1; // Reset to default quantity
  localStorage.removeItem(`itemState_${props.item.name}`); // Remove saved state
};

const selectSize = (size) => {
  selectedSize.value = size;
  saveState();
};

const updateQuantity = (amount) => {
  quantity.value = Math.max(1, quantity.value + amount); // Ensure quantity is at least 1
  saveState();
};

const totalPrice = computed(() => {
  if (props.item.sizes) {
    return quantity.value * props.item.sizes[selectedSize.value];
  } else {
    return quantity.value * props.item.price;
  }
});

const totalPriceFormatted = computed(() => {
  return `$${totalPrice.value.toFixed(2)}`;
});

const addOrUpdateCart = (item) => {
  const cartItem = {
    ...item,
    size: selectedSize.value,
    quantity: quantity.value,
    totalPrice: totalPrice.value,
  };
  console.log("Adding or updating cart:", cartItem);
  if (isEditing.value) {
    cartStore.updateCartItem(cartItem);
    cartStore.clearCurrentEditItem();
    router.push({ name: 'Cart' });
  } else {
    cartStore.addToCart(cartItem);
    router.push({ name: 'Menu' });
  }
  console.log("Current cart items:", cartStore.items);
  resetState(); // Reset the state after adding/updating the cart
};

onMounted(() => {
  if (route.query.edit && cartStore.isEditing && cartStore.currentEditItem) {
    const { size, quantity: editQuantity } = cartStore.currentEditItem;
    selectedSize.value = size;
    quantity.value = editQuantity;
    isEditing.value = true;
    cartStore.clearCurrentEditItem(); // Clear the edit state after loading
  } else {
    resetState(); // Reset to default state if not editing
  }
});

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
  border: 2px solid transparent; /* Default transparent border */
}

.single-size.selected .size-square {
  color: #fff;
}

.single-size.selected[data-size="small"] .size-square {
  background-color: blue;
  border: 2px solid green; /* Green border for selected size */
}

.single-size.selected[data-size="medium"] .size-square {
  background-color: blue;
  border: 2px solid green; /* Green border for selected size */
}

.single-size.selected[data-size="large"] .size-square {
  background-color: purple;
  border: 2px solid green; /* Green border for selected size */
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
}

.single-food-item img {
  width: 100%;
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
  padding: 0rem 0.8rem;
  border: none;
  background-color: rgb(0, 0, 0, 0);
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
