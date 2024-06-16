<template>
    <header>
      <nav class="wrapper-nav-inner">
        <ul class="nav-menu-links">
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/about">About</a></li>
        </ul>
        <img src="" alt="">
        <ul>
          <li><button></button></li>
          <li><a href="/cart"><img src="" alt=""></a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const cartItemCount = ref(0);
  </script>
  
  <style scoped>


  </style>