<script setup>
// De drie kaarten. Vue maakt hier met v-for drie keer dezelfde HTML van.
const cards = [
  {
    title: 'Construction',
    text: 'We specialize in all kinds of construction works. Our certified team provides the services in time and on the highest level.',
    image: '/images/construction.jpg',
  },
  {
    title: 'About Us',
    text: 'BuildWall is completely client-oriented company. We are able meet schedule deadlines with top quality.',
    image: '/images/about.jpg',
  },
  {
    title: 'Effective Teamwork',
    text: 'We have a very good team-based and teamwork attitude, working together to find the best solutions.',
    image: '/images/teamwork.jpg',
  },
]
</script>

<template>
  <!-- Balk "We Are BuildWall" -->
  <section class="intro">
    <div class="container">
      <div class="row align-center">
        <div class="col-12 col-lg-auto">
          <h2>We Are BuildWall</h2>
        </div>
        <div class="col-12 col-lg">
          <p>We have been transforming the ideas and visions into award-winning projects.</p>
        </div>
        <div class="col-12 col-lg-auto">
          <a href="#" class="btn btn-yellow"
            ><i class="fa-solid fa-envelope"></i> Request a quote</a
          >
        </div>
      </div>
    </div>
  </section>

  <!-- Drie kaarten naast elkaar -->
  <section class="who-we-are">
    <div class="container">
      <div class="row">
        <div v-for="card in cards" :key="card.title" class="col-12 col-md-4 card-column">
          <div class="card">
            <img :src="card.image" :alt="card.title" />
            <div class="card-body">
              <h3>{{ card.title }}</h3>
              <span class="card-line"></span>
              <p>{{ card.text }}</p>
              <a href="#" class="btn btn-yellow"
                >Learn more <i class="fa-solid fa-angle-right"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

// Balk "We Are BuildWall"
.intro {
  padding: 35px 0;
  text-align: center;

  @include respond-from('lg') {
    padding: 44px 0;
    text-align: left;
  }
}

.intro h2 {
  font-size: 34px;
  font-weight: 600;
  color: $yellow;
}

.intro p {
  margin: 10px 0 20px;
  font-family: $font-heading;
  font-size: 16px;
  font-weight: 600;
  color: $dark;

  @include respond-from('lg') {
    margin: 0;
  }
}

// Kaarten
.who-we-are {
  padding: 60px 0 30px;
  background-color: $grey-1;

  @include respond-from('lg') {
    padding: 75px 0;
  }
}

.card-column {
  margin-bottom: 30px;

  @include respond-from('md') {
    margin-bottom: 0;
  }
}

.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #fff;
}

.card img {
  width: 100%;
  height: 278px;
  object-fit: cover;
}

.card-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 25px 35px;

  @include respond-from('xl') {
    padding: 45px 34px 50px;
  }
}

.card h3 {
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;

  @include respond-from('lg') {
    font-size: 28px;
  }
}

.card-line {
  width: 24px;
  height: 3px;
  margin: 18px 0 22px;
  background-color: $yellow;
}

.card p {
  margin-bottom: 30px;
}

// Knop altijd onderaan, zodat de drie knoppen gelijk staan
.card .btn {
  margin-top: auto;
  padding: 15px 20px;

  @include respond-from('lg') {
    padding: 18px 38px;
  }
}
</style>
