<template>
  <section class="hero">
    <div class="container">
      <span class="line"></span>
      <p class="subtitle">High quality garantied</p>
      <h1>Constructing<br />Is Our Life Business</h1>

      <div class="buttons">
        <a href="#" class="btn btn-yellow">Our services <i class="fa-solid fa-angle-right"></i></a>
        <a href="#" class="btn btn-dark">About us <i class="fa-solid fa-angle-right"></i></a>
      </div>
    </div>

    <!-- Pijlen van de slider -->
    <button class="arrow arrow-left"><i class="fa-solid fa-angle-left"></i></button>
    <button class="arrow arrow-right"><i class="fa-solid fa-angle-right"></i></button>
  </section>
</template>

<style scoped lang="scss">
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

// Foto met een witte laag eroverheen, zodat de tekst leesbaar blijft
.hero {
  position: relative;
  padding: 100px 0;
  text-align: center;
  background:
    linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)),
    url('/images/hero.jpg') center / cover;

  @include respond-from('lg') {
    padding: 220px 0 150px;
    text-align: left;
    background:
      linear-gradient(90deg, rgba(255, 255, 255, 0.9) 30%, rgba(255, 255, 255, 0) 70%),
      url('/images/hero.jpg') center / cover;
  }
}

.line {
  display: inline-block;
  width: 22px;
  height: 3px;
  margin-bottom: 25px;
  background-color: $yellow;
}

.subtitle {
  margin-bottom: 20px;
  font-family: $font-heading;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  color: $dark;

  @include respond-from('lg') {
    font-size: 22px;
  }
}

h1 {
  font-size: 40px;
  font-weight: 500;
  line-height: 1.3;

  @include respond-from('md') {
    font-size: 60px;
  }
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 35px;

  @include respond-from('lg') {
    justify-content: flex-start;
  }
}

.arrow {
  position: absolute;
  top: 50%;
  width: 45px;
  height: 55px;
  border: 0;
  font-size: 20px;
  color: #fff;
  background-color: rgba(34, 41, 49, 0.5);
  transform: translateY(-50%);
  cursor: pointer;

  @include respond-from('lg') {
    width: 63px;
    height: 63px;
  }
}

.arrow-left {
  left: 0;
}

.arrow-right {
  right: 0;
}
</style>
