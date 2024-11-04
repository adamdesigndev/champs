// src/router/index.js

// Importing router functions and page components
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Menu from '../pages/Menu.vue';
import SingleFoodItem from '../pages/SingleFoodItem.vue';
import Cart from '../pages/Cart.vue';
import Checkout from '../pages/Checkout.vue';
import About from '../pages/About.vue';

// Defining route configurations
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/food/:name',
    name: 'SingleFoodItem',
    component: SingleFoodItem,
    props: true // Allows route params (e.g., food name) to be passed as props
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

// Creating and configuring the router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Uses HTML5 history mode
  routes, // Adds the defined routes to the router

  /**
   * scrollBehavior
   * @description Controls page scroll position when navigating between routes
   * @param {Object} to - Target route
   * @param {Object} from - Current route
   * @param {Object} savedPosition - Saved scroll position for the target route
   * @returns {Object} - Scroll position to apply after navigation
   */
  scrollBehavior(to, from, savedPosition) {
    // Restore saved scroll position, or scroll to the top by default
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;