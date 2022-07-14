import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '../views/ProductView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // { path: '/', name: 'home', component: HomeView },
    { path: '/', name: 'shop', component: ProductView },
    { path: '/:id', name: 'product', component: ProductDetailView, props: true }
    // { path: '/faq', name: 'faq', component: FAQView }
  ]
})

export default router
