import { defineStore } from 'pinia'
import axios from 'axios'

export const usePotteryStore = defineStore('pottery', {
  state: () => ({
    products: [],
    isLoading: false,
    isSubmitting: false,
    error: null,
    orderStatus: null
  }),
  actions: {
    async fetchProducts() {
      this.isLoading = true
      this.error = null
      try {
        // Используем mock данные вместо реального API
        const mockProducts = [
          { id: 1, title: 'Керамическая ваза', price: 45 },
          { id: 2, title: 'Глиняный кувшин', price: 60 },
          { id: 3, title: 'Чайный набор', price: 85 }
        ]
        this.products = mockProducts
      } catch (err) {
        this.error = 'Ошибка загрузки изделий'
      } finally {
        this.isLoading = false
      }
    },
    async submitOrder(orderData) {
      this.isSubmitting = true
      this.orderStatus = null
      try {
        // Имитация отправки на сервер
        await new Promise(resolve => setTimeout(resolve, 1000))
        this.orderStatus = `Заказ от ${orderData.name} принят!`
      } catch (err) {
        this.orderStatus = 'Ошибка оформления заказа'
      } finally {
        this.isSubmitting = false
      }
    }
  }
})