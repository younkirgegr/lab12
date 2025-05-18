<template>
  <div class="order-page">
    <h1>Форма заказа</h1>
    
    <form @submit.prevent="submitOrder" class="order-form">
      <div class="form-group">
        <label>Ваше имя:</label>
        <input type="text" v-model="formData.name" required>
      </div>
      
      <div class="form-group">
        <label>Выберите изделие:</label>
        <select v-model="formData.productId" required>
          <option value="">-- Выберите --</option>
          <option v-for="product in store.products" 
                  :key="product.id" 
                  :value="product.id">
            {{ product.title }}
          </option>
        </select>
      </div>
      
      <button type="submit" :disabled="store.isSubmitting">
        {{ store.isSubmitting ? 'Отправка...' : 'Заказать' }}
      </button>
    </form>
    
    <div v-if="store.orderStatus" class="status-message">
      {{ store.orderStatus }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePotteryStore } from '../stores/potteryStore'

const store = usePotteryStore()
const formData = ref({
  name: '',
  productId: ''
})

const submitOrder = () => {
  store.submitOrder(formData.value)
}
</script>

<style scoped>
.order-form {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>