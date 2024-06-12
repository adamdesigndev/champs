<template>
    <footer>
      <div class="footer-content">
        <img src="" alt="Logo">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </nav>
      </div>
      <div class="social-media">
        <a href="#"><img src="" alt="Facebook"></a>
        <a href="#"><img src="" alt="Twitter"></a>
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  footer {
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .footer-content nav ul {
    display: flex;
    list-style: none;
  }
  
  .footer-content nav li {
    margin: 0 1rem;
  }
  
  .footer-content nav a {
    text-decoration: none;
    color: white;
  }
  
  .social-media a img {
    width: 24px;
    margin: 0 0.5rem;
  }
  </style>