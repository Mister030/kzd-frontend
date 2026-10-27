<script setup>
// De zes projecten. Vue maakt hier met v-for zes tegels van.
const projects = [
  { title: 'Limoges, France', image: '/images/project-1.jpg' },
  { title: 'Shreveport, Bossier City', image: '/images/project-2.jpg' },
  { title: 'The Nines, NY', image: '/images/project-3.jpg' },
  { title: 'Twelve West, Portland', image: '/images/project-4.jpg' },
  { title: 'Palm Bay, Florida', image: '/images/project-5.jpg' },
  { title: 'Clean Water, Memphis', image: '/images/project-6.jpg' },
]
</script>

<template>
  <section>
    <div class="projects-header">
      <h2>Featured Projects</h2>
      <ul class="filters">
        <li class="active">All</li>
        <li>Building</li>
        <li>Consulting</li>
        <li>Interior</li>
        <li>Office</li>
      </ul>
    </div>

    <!-- Zes foto's, op desktop drie naast elkaar -->
    <div class="row no-gutters">
      <div v-for="project in projects" :key="project.title" class="col-12 col-md-4">
        <div class="project">
          <img :src="project.image" :alt="project.title" />

          <!-- Donkere laag die verschijnt als je met de muis over de foto gaat -->
          <div class="project-overlay">
            <h3>{{ project.title }}</h3>
            <p>
              This luxury resort and senior independent living facility with a fitness center, pool,
              spa, sauna, hair salon, classroom space and...
            </p>
            <a href="#">Learn more <i class="fa-solid fa-angle-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

.projects-header {
  padding: 30px 15px;
  text-align: center;
  background-color: $grey-2;
}

.projects-header h2 {
  margin-bottom: 18px;
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px 30px;
}

.filters li {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: $dark;
  cursor: pointer;
}

.filters li.active {
  color: $yellow;
}

.project {
  position: relative;
  height: 300px;
  overflow: hidden;

  @include respond-from('lg') {
    height: 390px;
  }
}

.project img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

// Onzichtbaar (opacity 0) tot je eroverheen beweegt
.project-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  color: #fff;
  background-color: rgba(34, 41, 49, 0.88);
  opacity: 0;
  transition: opacity 0.3s;

  @include respond-from('lg') {
    padding: 30px 40px;
  }
}

.project:hover .project-overlay {
  opacity: 1;
}

.project-overlay h3 {
  margin-bottom: 15px;
  font-size: 24px;
  color: #fff;
}

.project-overlay a {
  margin-top: 20px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: $yellow;
}
</style>
