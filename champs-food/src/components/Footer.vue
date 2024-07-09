<template>
    <footer>
      <div class="footer-content">
        <a href="http://"><img class="footer-logo" src="/images/champs-full-logo.svg" alt="Logo"></a>
       <div class="wrapper-footer-mid">
        <nav>
          <ul class="footer-nav">
            <li><a class="footer-menu-link" href="/">Home</a></li>
            <li><a class="footer-menu-link" href="/menu">Menu</a></li>
            <li><a class="footer-menu-link" href="/about">About</a></li>
            <li><a class="footer-menu-link" href="/cart">Cart</a></li>
          </ul>
        </nav>
        <div class="wrapper-social-media">
        <a href="https://www.instagram.com/" target="_blank"><img src="/images/instagram-logo.svg" alt="Instagram"></a>
        <a href="https://x.com/?lang=en" target="_blank"><img src="/images/x-logo.svg" alt="X"></a>
      </div>
      </div> 
      <div class="wrapper-footer-misc">
        <ul class="misc-links">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Sales</li>
            <li>Cookies</li>
          </ul>
          <p class="footer-notes">Copyright 2024 Champs<br/>All Rights Reserved</p>
      </div>
    </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
.footer-content {
  max-width: 2400px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1.5rem;
  border-top: 2px solid var(--clr-primary);
}

.footer-logo {
  height: 5rem;
  margin-bottom: 1rem;
}
.wrapper-footer-mid {
 display: flex;
 flex-direction: column;
 gap: 2rem;
}

.footer-nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
}

.footer-menu-link {
  font-size: var(--fs-300);
  font-weight: 500;
  color: var(--clr-primary);
}
.misc-links {
display: flex;
flex-direction: row;
justify-content: right;
gap: 1rem;
}

.misc-links li {
  color: var(--clr-primary);
  font-size: var(--fs-200);
  font-weight: 300;
}
.wrapper-social-media {
display: flex;
flex-direction: row;
gap: 2rem;
align-items: center;
justify-content: center;
}

.wrapper-social-media img {
  height: 1.7rem;
}

.wrapper-footer-misc {
  display: flex;
  flex-direction: column;
  gap: 2.5rem
}

.footer-notes {
  font-size: var(--fs-100);
  color: var(--clr-primary);
  font-weight: 300;
  text-align: right;
  line-height: 1rem;
  letter-spacing: .05rem;
}

@media (width < 850px) {
  .footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wrapper-footer-mid {
 gap: 1rem;
 margin-bottom: 1rem;
}

.wrapper-footer-misc {
  gap: 1rem
}

.footer-notes {
  text-align: center;
}
}
  </style>