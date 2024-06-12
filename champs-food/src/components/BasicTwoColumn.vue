<template>
    <section class="basic-two-column">
      <div class="column">
        <img :src="imageSrc" :alt="imageAlt">
      </div>
      <div class="column">
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
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
  .basic-two-column {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
  }
  
  .column {
    flex: 1;
    margin: 0 1rem;
  }
  
  .column img {
    width: 100%;
  }
  </style>