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
      <BasicTwoColumn
      imageSrc="/images/DALL·E 2024-06-06 20.35.05 - A fast food restaurant employee, a female wearing a red uniform and cap, serving food to a family. The focus is more on the female employee, who is ha.webp"
      imageAlt=""
      header="Who we are"
      body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      buttonText="Learn More"
      buttonLink="/About"
      />
    </div>
  </template>
  
  <script setup>
  import HeroSection from '../components/HeroSection.vue';
  import ThreeColumnSection from '../components/ThreeColumnSection.vue';
  import BasicTwoColumn from '../components/BasicTwoColumn.vue';
  </script>