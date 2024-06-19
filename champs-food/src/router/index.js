// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Menu from '../pages/Menu.vue';
import SingleFoodItem from '../pages/SingleFoodItem.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/SingleFoodItem',
    name: 'SingleFoodItem',
    component: SingleFoodItem
  },
  // Add other routes here
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;