<template>
  <div class="home-page">
    <section class="hero">
      <h1>Добро пожаловать в гончарную мастерскую</h1>
      <p>Создаем уникальные керамические изделия ручной работы</p>
    </section>
    
    <section class="about">
      <h2>О нашей мастерской</h2>
      <div class="features">
        <div class="feature-card">
          <h3>Традиционные техники</h3>
          <p>Используем методы, передающиеся из поколения в поколение</p>
        </div>
        <div class="feature-card">
          <h3>Натуральные материалы</h3>
          <p>Работаем только с экологически чистой глиной</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  padding: 4rem 0;
  background-color: #FFF8DC; /* бежевый */
  border-radius: 8px;
  margin-bottom: 2rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>