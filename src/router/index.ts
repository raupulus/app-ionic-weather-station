import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: () => import('@/views/Resumen.vue')
  },
  {
    path: '/resumen',
    redirect: '/'
  },
  {
    path: '/temperature',
    component: () => import('@/views/Temperature.vue')
  },
  {
    path: '/humidity',
    component: () => import('@/views/Humidity.vue')
  },
  {
    path: '/pressure',
    component: () => import('@/views/Pressure.vue')
  },
  {
    path: '/wind',
    component: () => import('@/views/Wind.vue')
  },
  {
    path: '/light',
    component: () => import('@/views/Light.vue')
  },
  {
    path: '/folder/:id',
    component: () => import('@/views/FolderPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
