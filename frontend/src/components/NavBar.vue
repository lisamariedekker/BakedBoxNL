<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="/shop">BakedBox</a>
        <div class="navbar-nav">
          <RouterLink to="/" class="nav-link disabled">Home</RouterLink>
          <RouterLink to="/shop" class="nav-link">Shop</RouterLink>
          <RouterLink to="/faq" class="nav-link disabled">FAQ</RouterLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script></script>

<style>
@import '@/css/index.css';
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

  .navbar {
    background-color: var(--primary-pink-100);
    font-family: 'Rubik', sans-serif;
  }

  .container-fluid {
    padding: 5px 100px 5px 30px;
  }

  .navbar-brand {
    color: var(--primary-pink-900);
    font-size: 32px;
  }
</style>
