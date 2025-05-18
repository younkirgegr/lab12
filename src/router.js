import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import OrderPage from './pages/OrderPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { title: 'Главная | Гончарная мастерская' }
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsPage,
    meta: { title: 'Наши изделия' }
  },
  {
    path: '/order',
    name: 'order',
    component: OrderPage,
    meta: { title: 'Сделать заказ' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  document.title = to.meta.title || 'Гончарная мастерская'
})

export default router