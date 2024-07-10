<!-- @format -->

<!-- Home.vue -->
<template>
  <div>
    <HeroSection
      :heading="heroHeading"
      :subheading="heroSubheading"
      :buttonText="heroButtonText"
      :buttonLink="heroButtonLink"
      :imageSrc="heroImageSrc"
      :imageAlt="heroImageAlt"
    />
    <ThreeColumnSection />
    <BasicTwoColumn
      :imageSrc="firstTwoColumnImageSrc"
      :imageAlt="firstTwoColumnImageAlt"
      :header="firstTwoColumnHeader"
      :body="firstTwoColumnBody"
      :buttonText="firstTwoColumnButtonText"
      :buttonLink="firstTwoColumnButtonLink"
      :reverse="true"
      :red="false"
      :textWhite="false"
      :buttonReverse="false"
    />
    <BasicTwoColumn
      :imageSrc="secondTwoColumnImageSrc"
      :imageAlt="secondTwoColumnImageAlt"
      :header="secondTwoColumnHeader"
      :body="secondTwoColumnBody"
      :buttonText="secondTwoColumnButtonText"
      :buttonLink="secondTwoColumnButtonLink"
      :reverse="false"
      :red="true"
      :textWhite="true"
      :buttonReverse="true"
    />
    <BasicTwoColumn
      :imageSrc="thirdTwoColumnImageSrc"
      :imageAlt="thirdTwoColumnImageAlt"
      :header="thirdTwoColumnHeader"
      :body="thirdTwoColumnBody"
      :buttonText="thirdTwoColumnButtonText"
      :buttonLink="thirdTwoColumnButtonLink"
      :reverse="true"
      :red="false"
      :textWhite="false"
      :buttonReverse="false"
      :showAppStore="true"
    />
  </div>
</template>

<script setup>
import HeroSection from "../components/HeroSection.vue";
import ThreeColumnSection from "../components/ThreeColumnSection.vue";
import BasicTwoColumn from "../components/BasicTwoColumn.vue";

const heroHeading = "Chicken for the Champs";
const heroSubheading = "Delicious food, ready to serve!";
const heroButtonText = "View Menu";
const heroButtonLink = "/Menu";
const heroImageSrc = "/images/Homestyle-Ranch-Chicken-Club.png";
const heroImageAlt = "Delicious food";

const firstTwoColumnImageSrc =
  "/images/DALL·E 2024-06-06 20.35.05 - A fast food restaurant employee, a female wearing a red uniform and cap, serving food to a family. The focus is more on the female employee, who is ha.webp";
const firstTwoColumnImageAlt = "";
const firstTwoColumnHeader = "Who we are";
const firstTwoColumnBody =
  "It’s a responsibility we take seriously ‒ because we know when our communities thrive, so does our business. By thinking globally and acting locally, we are better equipped to effectively support our customers, our employees and the communities we are all part of.";
const firstTwoColumnButtonText = "Learn More";
const firstTwoColumnButtonLink = "/About";

const secondTwoColumnImageSrc = "/images/Grilled-Chicken-Sandwich.png";
const secondTwoColumnImageAlt = "";
const secondTwoColumnHeader = "Bigger, Juicier and bolder than ever before";
const secondTwoColumnBody = "";
const secondTwoColumnButtonText = "Get It Now";
const secondTwoColumnButtonLink = "/food/GRILLED CHICKEN SANDWICH";

const thirdTwoColumnImageSrc = "/images/Champs-app.png";
const thirdTwoColumnImageAlt = "";
const thirdTwoColumnHeader = "Free Spicy Chicken w/ $1 min. purchase";
const thirdTwoColumnBody = "Vist the app store for more deals and offers!";
const thirdTwoColumnButtonText = "Learn More";
const thirdTwoColumnButtonLink = "/About";
</script>
