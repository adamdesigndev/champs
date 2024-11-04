<!-- SingleFoodItem.vue -->
<template>
  <div v-if="item">
    <div class="wrapper-menu-outer-section">
      <div class="wrapper-general">
        <div class="wrapper-with-info-card-right">
          <div>
            <!-- Back link to Menu -->
            <router-link :to="'/menu'" class="back-menu">
              <span class="back-arrow"><</span> Menu
            </router-link>

            <!-- Item image with responsive support -->
            <picture>
              <source :srcset="item.images.medium" media="(max-width: 850px)" />
              <img :src="item.images.large" :alt="item.name" ref="image" class="fade-in-left single-food-item-card-img" />
            </picture>
          </div>

          <!-- Item details and action card -->
          <div class="single-food-item-buy-card fade-in-down" ref="buyCard">
            <div ref="buyCardContent" class="content-wrapper">
              <h3 class="header-4 fade-in-up">{{ item.name }}</h3>
              <p class="main-copy fade-in-up">{{ item.description }}</p>
            </div>

            <!-- Size selection -->
            <div v-if="item.sizes" class="fade-in-up">
              <h6 class="header-6">Select size</h6>
              <div class="wrapper-size-selecter">
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

            <!-- Quantity selection and add-to-cart button -->
            <div class="wrapper-qauntity-add-to-cart fade-in-up">
              <div class="wrapper-quanitity">
                <h6 class="header-6 header-quanitity">Quantity</h6>
                <div class="quanitiy-picker">
                  <button class="minus-qty" @click="updateQuantity(-1)">-</button>
                  <p class="food-item-amount-number">{{ quantity }}</p>
                  <button class="plus-qty" @click="updateQuantity(1)">+</button>
                </div>
              </div>
              <button
                class="main-btn add-item-with-price"
                @click="addOrUpdateCart(item)"
              >
                <p>{{ isEditing ? 'Update' : 'Add To Cart' }}</p>
                <p class="single-item-price-in-button">{{ totalPriceFormatted }}</p>
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

const props = defineProps({
  item: Object,
});

const route = useRoute();
const router = useRouter();
const isEditing = ref(false); // Tracks if editing an existing item in the cart

// Default state
const selectedSize = ref("medium");
const quantity = ref(1);
const initialLoad = ref(true);

/**
 * Sets the selected size for the item
 * @param {string} size - Size selected by the user
 */
const selectSize = (size) => {
  selectedSize.value = size;
};

/**
 * Updates the item quantity
 * @param {number} amount - Amount to increase or decrease the quantity
 */
const updateQuantity = (amount) => {
  quantity.value = Math.max(1, quantity.value + amount); // Ensure quantity is at least 1
};

// Computed property for total price based on selected size and quantity
const totalPrice = computed(() => {
  return quantity.value * (props.item.sizes?.[selectedSize.value] || props.item.price);
});

// Formatted total price for display
const totalPriceFormatted = computed(() => {
  return `$${totalPrice.value.toFixed(2)}`;
});

/**
 * Adds or updates the item in the cart and redirects to the appropriate page
 * @param {Object} item - The item to add or update in the cart
 */
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

// Initialize component animations and set editing state if applicable
onMounted(() => {
  setTimeout(() => {
    initialLoad.value = false;
    document.querySelector('.fade-in-left').classList.add('animate');
    document.querySelector('.fade-in-down').classList.add('animate');
    setTimeout(() => {
      document.querySelectorAll('.fade-in-up').forEach(el => el.classList.add('animate'));
    }, 0);
  }, 500);

  if (route.query.edit && cartStore.isEditing && cartStore.currentEditItem) {
    const { size, quantity: editQuantity } = cartStore.currentEditItem;
    selectedSize.value = size;
    quantity.value = editQuantity;
    isEditing.value = true;
  }
});

// Watch for changes in the item prop to set the default size
watch(
  () => props.item,
  (newItem) => {
    if (newItem && newItem.sizes) {
      selectedSize.value = "medium" in newItem.sizes ? "medium" : Object.keys(newItem.sizes)[0];
    }
  }
);
</script>

<style scoped>
/* Styles for size selection, item details, and animations */

.wrapper-size-selecter {
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
}

.single-size {
  background-color: transparent;
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

/* Fade-in animations */
@keyframes fadeInLeft {
  0% { opacity: 0; transform: translateX(-20px); }
  100% { opacity: 1; transform: translateX(0); }
}

.fade-in-left {
  opacity: 0;
  transform: translateX(-20px);
}

.animate.fade-in-left {
  animation: fadeInLeft 0.5s ease-out forwards;
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
