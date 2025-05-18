<template>
  <nav class="navbar">
    <router-link to="/" class="logo">
      <span>Глиняный круг</span>
    </router-link>
    <div class="nav-links">
      <router-link to="/">Главная</router-link>
      <router-link to="/products">Изделия</router-link>
      <router-link to="/order">Заказать</router-link>
    </div>
  </nav>
</template>

<script setup>
// Логика меню
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #8B4513; /* коричневый */
  color: white;
}

.logo span {
  font-size: 1.5rem;
  font-weight: bold;
  color: #FFF8DC; /* бежевый */
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-links a:hover {
  background-color: #A0522D; /* темно-коричневый */
}

.nav-links a.router-link-exact-active {
  background-color: #A0522D;
  font-weight: bold;
}
</style>