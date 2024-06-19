<template>
    <section class="wrapper-basic-outer-section">
      <div class="wrapper-general">
        <div class="wrapper-basic-two-up">
        <div class="wrapper-inner-hero-left">
          <h2 class="header-2">Who we are</h2>
        <p class="main-copy body-bottom-button">Another subheading—maybe it’s related to the image on the left, or the button below Another subheading—maybe it’s related to the image on the left, or the button below </p>
        <button class="main-btn">Learn more</button>
        </div>
        <div class="wrapper-inner-hero-right">
        <img class="two-up-section-image" src="/images/DALL·E 2024-06-06 20.35.05 - A fast food restaurant employee, a female wearing a red uniform and cap, serving food to a family. The focus is more on the female employee, who is ha.webp" alt="Delicious food">
      </div>
    </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const props = defineProps({
    imageSrc: String,
    imageAlt: String,
    title: String,
    content: String
  });
  </script>
  
  <style scoped>

  </style>