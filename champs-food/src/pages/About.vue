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
      :hideButton="true"
    />
    <BasicTwoColumn
      :imageSrc="secondTwoColumnImageSrc"
      :imageAlt="secondTwoColumnImageAlt"
      :header="secondTwoColumnHeader"
      :body="secondTwoColumnBody"
      :buttonText="secondTwoColumnButtonText"
      :buttonLink="secondTwoColumnButtonLink"
      :reverse="false"
      :red="false"
      :textWhite="false"
      :buttonReverse="false"
      :hideButton="true"
    />
    </div>
  </template>
  
  <script setup>
import HeroSection from "../components/HeroSection.vue";
import BasicTwoColumn from "../components/BasicTwoColumn.vue";

const heroHeading = "We are Champs";
const heroSubheading = "Eating on the go can be a challenge, but we want to help. From hand-breading the chicken for our classic sandwiches to sourcing fresh produce for our salads and fruit cups, quality food has always been a top priority. We believe in delivering great fast food every day of the week.";
const heroButtonText = "View Menu";
const heroButtonLink = "/Menu";
const heroImageSrc = "/images/Champs-About.jpg";
const heroImageAlt = "Delicious food";

const firstTwoColumnImageSrc =
  "/images/Champs-worker.jpg";
const firstTwoColumnImageAlt = "";
const firstTwoColumnHeader = "Our Team";
const firstTwoColumnBody =
  "We are committed to prioritizing safety in all our offices and Company-owned restaurants around the world, as well as supporting our Franchisees to do the same in the restaurants they own and operate. We are also continuing to foster respectful workplaces where people can be themselves without fear of harassment, discrimination, retaliation or violence.";
const firstTwoColumnButtonText = "Learn More";
const firstTwoColumnButtonLink = "/About";

const secondTwoColumnImageSrc = "/images/Champs-chickens.jpg";
const secondTwoColumnImageAlt = "";
const secondTwoColumnHeader = "Animal Welfare";
const secondTwoColumnBody = "We believe we have a responsibility to improve the health and welfare of animals in our supply chain and work with our global network of suppliers to actively encourage industry and cross-sector collaboration. To achieve a positive impact in this area, we engage recognized subject-matter experts and academia to access guidance and challenge the way we think. Taking a whole-system approach that considers everything from housing to humane slaughter, we leverage our global scale in local markets to help drive positive outcomes.";
const secondTwoColumnButtonText = "Get It Now";
const secondTwoColumnButtonLink = "/Services";
  </script>