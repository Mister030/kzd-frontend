<script setup>
import TheHeader from './components/TheHeader.vue'
import HeroBanner from './components/HeroBanner.vue'
import WhoWeAre from './components/WhoWeAre.vue'
import FeaturedProjects from './components/FeaturedProjects.vue'
</script>

<template>
  <TheHeader />
  <main>
    <HeroBanner />
    <WhoWeAre />
    <FeaturedProjects />
  </main>
  <a href="#" class="to-top"><i class="fa-solid fa-arrow-up"></i> Top</a>
</template>

<style scoped lang="scss">
@use './styles/variables' as *;

// Knop rechtsonder om terug naar boven te gaan
.to-top {
  position: fixed;
  right: 25px;
  bottom: 0;
  padding: 12px 22px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  background-color: $yellow;
}
</style>
