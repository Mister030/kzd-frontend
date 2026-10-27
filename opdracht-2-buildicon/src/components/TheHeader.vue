<script setup>
import { ref } from 'vue'

// Is het menu op mobiel open of dicht?
const menuOpen = ref(false)

// Klapt het menu open of dicht
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <header>
    <!-- Bovenste deel: logo, contact en knop -->
    <div class="top">
      <div class="container">
        <div class="row align-center">
          <div class="col-12 col-md-4 col-lg-3">
            <a href="#" class="logo">
              <i class="fa-solid fa-building"></i>Build<span>Icon</span>
              <small>Construction company</small>
            </a>
          </div>

          <div class="col-md-8 col-lg-6 info">
            <div class="info-item">
              <i class="fa-solid fa-mobile-screen"></i>
              <div>
                <p class="info-label">Custom support &amp; sale</p>
                <p class="info-value">+7-495-1234567</p>
              </div>
            </div>
            <div class="info-item">
              <i class="fa-regular fa-clock"></i>
              <div>
                <p class="info-label">Working time</p>
                <p class="info-value">Mon–Sat: 08:00–18:00</p>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-3 quote">
            <a href="#" class="btn btn-dark"
              ><i class="fa-solid fa-envelope"></i> Request a quote</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Gele menubalk -->
    <nav class="container nav">
      <div class="nav-bar">
        <button class="menu-button" @click="toggleMenu">
          <i class="fa-solid fa-bars"></i>
        </button>

        <ul class="nav-list" :class="{ open: menuOpen }">
          <li><a href="#" class="active">Home</a></li>
          <li><a href="#">About</a></li>
          <li>
            <a href="#">Services <i class="fa-solid fa-angle-down"></i></a>
          </li>
          <li>
            <a href="#">Projects <i class="fa-solid fa-angle-down"></i></a>
          </li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <a href="#" class="search"><i class="fa-solid fa-magnifying-glass"></i></a>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

// Bovenste deel
.top {
  padding: 20px 0;
  text-align: center;

  @include respond-from('md') {
    text-align: left;
  }
}

.logo {
  font-family: $font-heading;
  font-size: 34px;
  font-weight: 600;
  color: $dark;
}

.logo i,
.logo span {
  color: $yellow;
}

.logo i {
  margin-right: 8px;
}

.logo small {
  display: block;
  font-family: $font-text;
  font-size: 11px;
  font-weight: 400;
  text-transform: uppercase;
  color: $text;
}

// Contactgegevens: niet op mobiel
.info {
  display: none;

  @include respond-from('md') {
    display: flex;
    justify-content: flex-end;
    gap: 30px;
  }
}

.info-item {
  display: flex;
  align-items: center;
  gap: 14px;
}

.info-item i {
  font-size: 28px;
  color: $yellow;
}

.info-label {
  font-size: 13px;
  text-transform: uppercase;
}

.info-value {
  font-family: $font-heading;
  font-size: 16px;
  font-weight: 600;
  color: $dark;
}

// Knop: op tablet is er geen ruimte, dus daar verborgen
.quote {
  margin-top: 15px;

  @include respond-from('md') {
    display: none;
  }

  @include respond-from('lg') {
    display: block;
    margin-top: 0;
    text-align: right;
  }
}

// Menubalk
.nav {
  position: relative;
  z-index: 10;

  // Op desktop valt de balk half over de foto eronder
  @include respond-from('lg') {
    margin-bottom: -34px;
  }
}

.nav-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 15px;
  background-color: $yellow;
}

// Hamburger: alleen op mobiel
.menu-button {
  padding: 15px 0;
  border: 0;
  background: none;
  font-size: 22px;
  color: #fff;
  cursor: pointer;

  @include respond-from('md') {
    display: none;
  }
}

// Menu: op mobiel pas zichtbaar na klikken
.nav-list {
  display: none;
  order: 3;
  width: 100%;

  @include respond-from('md') {
    display: flex;
    order: 0;
    width: auto;
  }
}

.nav-list.open {
  display: block;
}

.nav-list a {
  display: block;
  padding: 15px 19px;
  font-family: $font-heading;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
}

.nav-list a:hover,
.nav-list a.active {
  background-color: $dark;
}

.search {
  margin-left: auto;
  padding: 15px 5px;
  color: #fff;
}
</style>
