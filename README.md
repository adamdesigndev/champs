Champs App

Champs App is a web-based application that allows users to browse food items, add items to a shopping cart, and proceed to checkout with payment information. The app is built with Vue.js using the Composition API and localStorage for persisting cart data. It features a dynamic menu with category filtering, a cart management system, and checkout functionality.

Table of Contents

Overview
Key Features
Primary Files and Their Roles
How to Use
Credits
Overview

The Food Ordering App provides users with an interactive way to browse a variety of food items categorized by type, add items to their cart, and checkout with their details. It is designed to be user-friendly and highly responsive, ensuring a smooth experience across devices.

Built with: Vue.js 3 (Composition API)
Data Persistence: LocalStorage for cart and user details.
Navigation: Uses Vue Router for managing pages (Menu, Cart, Checkout).
Key Features

Dynamic Menu: Users can browse food items by categories (e.g., Drinks, Desserts, etc.).
Cart Management: Add, remove, and edit items in the shopping cart, with quantities and sizes.
Persistent Data: Cart and user information is saved in localStorage to retain data across sessions.
Checkout System: Collects and validates user contact and payment information before placing an order.
Animations: Includes smooth transitions and animations for elements like menus, cart items, and page sections.
Primary Files and Their Roles

1. App.vue
The root component that holds the structure of the app, including the header, mobile menu, router view for page navigation, and footer.

Key Imports:
Header.vue: The header component.
MobileMenu.vue: Mobile-specific menu component.
Footer.vue: The footer for all pages.
Provides a toggleMenu function that controls the mobile menu state.
2. main.js
The entry point for the Vue.js application. It creates and mounts the app, while also using the Vue Router for navigation.

3. cartStore.js
Handles the application's cart management logic using Vue's reactive state system. It includes:

addToCart(), removeFromCart(), and updateCartItem() functions for managing cart items.
Watches the cart.items and syncs it to localStorage for persistence.
4. useCheckoutStore.js
Manages the user's contact and payment information using Vue's reactive state and watches for changes to update localStorage.

Includes functions like resetUserInfo() and resetUserPayment() to clear stored user data when needed.
5. components/MenuNavigation.vue
Displays the list of food categories for the menu. Users can switch between categories by clicking, triggering the selection of relevant items.

6. components/FoodItemsList.vue
Renders the list of food items based on the selected category. It dynamically updates based on the selectedCategory passed as a prop.

7. components/FoodItemCard.vue
A card component that displays individual food items, including their image, name, and price. Clicking on an item routes the user to its detailed view.

8. components/CartListItems.vue
Lists the items currently in the user's cart, providing options to edit or remove items.

9. components/OrderSummaryPanel.vue
Displays the order summary, including the total number of items, subtotal, tax, and the total cost of the cart. It also includes a checkout button.

10. components/UserInfo.vue
Form for collecting the user's contact information. Includes validation for phone numbers, email, and required fields before proceeding to payment.

11. components/UserPayment.vue
Form for collecting payment information, including card number, expiration date, and CCV. Validation is applied to ensure valid inputs.

12. data.js
Holds a list of available food items, their descriptions, prices, and images. This data is used across the app for rendering menu items and details.

How to Use

Browse Menu: Use the navigation sidebar to filter food items by category.
Add to Cart: Select an item, choose its size and quantity, and add it to the cart.
Manage Cart: Edit or remove items from the cart, with automatic price updates.
Checkout: Fill in contact and payment information to place an order.
Persisted Data: Your cart and user details will be saved across sessions.
Credits

Developed by: Adam Flores
UI Design: Adam Flores
Images: Food item images are sourced from from Chic-fil-a, KFC, Jack in the Box.
Data: Sample food items are sourced from Chic-fil-a, KFC, Jack in the Box.
