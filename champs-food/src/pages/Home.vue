<!-- Home.vue -->
<template>
    <div>
      <HeroSection 
      heading="Chicken for the Champs"
      subheading="Delicious food, ready to serve!"
      buttonText="Add To Order"
      buttonLink="/SingleFoodItem"
      imageSrc="/images/grilledClub_colbyJack_PDP.png"
      imageAlt="Delicous food"
      />
      <ThreeColumnSection />
      <BasicTwoColumn />
    </div>
  </template>
  
  <script setup>
  import HeroSection from '../components/HeroSection.vue';
  import ThreeColumnSection from '../components/ThreeColumnSection.vue';
  import BasicTwoColumn from '../components/BasicTwoColumn.vue';
  </script>