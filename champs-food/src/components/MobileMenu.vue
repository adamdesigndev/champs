<!-- MobileMenu.vue -->
<template>
  <div class="mobile-menu" v-if="isOpen">
    <nav>
      <ul>
        <li><a href="/Menu">Menu</a></li>
        <li><a href="/Cart">Bag</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Home">Home</a></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: Boolean
});
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--clr-primary);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 5rem;
  z-index: 1000; /* Ensure mobile menu is below the header */
  padding: 6rem 1rem 1rem 1rem;
}

.mobile-menu nav ul {
  list-style: none;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.mobile-menu nav a {
  color: #fff;
  text-decoration: none;
  font-size: var(--fs-900);
  font-weight: 600;
  line-height: 4rem;
}
</style>