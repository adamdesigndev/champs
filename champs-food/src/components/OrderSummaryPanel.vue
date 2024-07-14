<!-- @format -->
<!-- OrderSummaryPanel.vue -->
<template>
  <aside class="menu-cart-card-right cart-summary fade-in">
    <div class="card-header-cart">
      <h2 class="header-5 order-summary-stagger">Order Summary</h2>
      <div class="wrapper-total-items-in-cart order-summary-stagger">
        <p class="header-6">{{ totalItems }} item(s)</p>
        <button class="btn-view-all" @click="toggleViewAll">
          <img class="view-btn" :src="viewAll ? '/images/upArrow.png' : '/images/downArrow.png'" alt="Toggle View" />
        </button>
      </div>
    </div>
    <div class="panel-list-items" v-show="viewAll">
      <div
        v-for="item in cartStore.items"
        :key="item.name + item.size"
        class="panel-item order-summary-stagger"
      >
        <div class="panel-item-name-size">
          <h6 class="header-6">{{ item.name }}</h6>
          <p class="size-quantity-details" v-if="item.sizes">{{ item.size }}</p>
        </div>
        <div class="panel-price-quantity">
          <p class="panel-item-price">
            ${{ (item.totalPrice / item.quantity).toFixed(2) }}
          </p>
          <p class="size-quantity-details">
            Qty: <span>{{ item.quantity }}</span>
          </p>
        </div>
      </div>
    </div>

    <div class="cart-price-order-details">
      <div class="inner-cart-price-order-details order-summary-stagger">
        <p class="cart-total-details">Subtotal:</p>
        <p class="cart-total-details">${{ subtotal.toFixed(2) }}</p>
      </div>
      <div class="inner-cart-price-order-details order-summary-stagger">
        <p class="cart-total-details">Tax:</p>
        <p class="cart-total-details">${{ tax.toFixed(2) }}</p>
      </div>
      <div class="inner-cart-price-order-details order-summary-stagger" v-if="isCheckoutPage">
        <p class="cart-total-details">Grand Total:</p>
        <p class="cart-total-details">${{ total.toFixed(2) }}</p>
      </div>
    </div>
    <button class="main-btn add-item-with-price order-summary-stagger" @click="proceedToCheckout" v-if="!isCheckoutPage">
      <p>Checkout</p>
      <p>${{ total.toFixed(2) }}</p>
    </button>
  </aside>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { cartStore } from "../../cartStore";

const viewAll = ref(false);

const toggleViewAll = () => {
  viewAll.value = !viewAll.value;
};

const totalItems = computed(() =>
  cartStore.items.reduce((sum, item) => sum + item.quantity, 0)
);
const subtotal = computed(() =>
  cartStore.items.reduce((sum, item) => sum + item.totalPrice, 0)
);
const tax = computed(() => subtotal.value * 0.09);
const total = computed(() => subtotal.value + tax.value);

const router = useRouter();
const route = useRoute();
const isCheckoutPage = computed(() => route.name === 'Checkout');

const proceedToCheckout = () => {
  router.push({ name: 'Checkout' });
};

onMounted(() => {
  // Stagger element animation with a 2-second delay
  setTimeout(() => {
    const elements = document.querySelectorAll('.order-summary-stagger');
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('staggered');
      }, index * 50); // Stagger each element by 200ms
    });
  }, 250); // 2-second delay before starting the stagger
});
</script>

<style scoped>
@keyframes fadeInUpOrderSummary {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInContainer {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeInContainer 0.5s forwards; /* Immediate fade-in animation for the container */
}

.order-summary-stagger {
  opacity: 0;
  transition: opacity 0.5s, transform 0.5s;
}

.order-summary-stagger.staggered {
  animation: fadeInUpOrderSummary 0.5s forwards;
}

.cart-summary {
  gap: 2rem; 
}

.wrapper-total-items-in-cart {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.btn-view-all {
  background-color: rgba(0,0,0,0);
  padding: 0 5px;
  line-height: 0;
  border: none;
  cursor: pointer;
}

.panel-list-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.panel-item {
  display: grid;
  grid-template-columns: 3fr 1fr;
  border-bottom: 1px rgb(219, 219, 219) solid;
  gap: 1rem;
  padding-bottom: 1rem;
}

.size-quantity-details {
  font-size: var(--fs-300);
  color: rgb(103, 103, 103);
}

.panel-price-quantity {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
}

.panel-item-price {
  font-size: var(--fs-200);
}

.inner-cart-price-order-details {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
}

.cart-total-details {
  font-size: var(--fs-200);
}

.add-item-with-price {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
}

.view-btn {
 max-height: 10px;
}
</style>
