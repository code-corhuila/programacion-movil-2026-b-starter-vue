import { createRouter, createWebHistory } from '@ionic/vue-router'
import type { RouteRecordRaw } from 'vue-router'

// Rutas de la funcionalidad "Catalogo de productos".
// Importante: '/productos/nuevo' va ANTES de '/productos/:id' para que no se
// interprete "nuevo" como un identificador.
const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/productos' },
  {
    path: '/productos',
    component: () => import('@/features/products/presentation/ProductListPage.vue'),
  },
  {
    path: '/productos/nuevo',
    component: () => import('@/features/products/presentation/ProductFormPage.vue'),
  },
  {
    path: '/productos/:id',
    component: () => import('@/features/products/presentation/ProductDetailPage.vue'),
  },
  {
    path: '/productos/:id/editar',
    component: () => import('@/features/products/presentation/ProductFormPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
