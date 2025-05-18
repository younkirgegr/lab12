<template>
  <div class="products-page">
    <h1>Наши изделия</h1>
    <button @click="fetchProducts" class="load-btn">
      Показать изделия
    </button>
    
    <div v-if="store.isLoading" class="loading">Загрузка...</div>
    <div v-else-if="store.error" class="error">{{ store.error }}</div>
    
    <div v-else class="product-grid">
      <div v-for="product in store.products" :key="product.id" class="product-card">
        <h3>{{ product.title }}</h3>
        <p>{{ product.price }}$</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePotteryStore } from '../stores/potteryStore'

const store = usePotteryStore()

const fetchProducts = () => {
  store.fetchProducts()
}
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.product-card {
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
}

.load-btn {
  padding: 0.75rem 1.5rem;
  background-color: #8B4513;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>