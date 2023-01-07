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
    path: '/air-quality',
    component: () => import('@/views/AirQuality.vue')
  },
  {
    path: '/rain',
    component: () => import('@/views/Rain.vue')
  },

  {
    path: '/lightning',
    component: () => import('@/views/Lightning.vue')
  },

  {
    path: '/aemet',
    component: () => import('@/views/Aemet.vue')
  },

  {
    path: '/about',
    component: () => import('@/views/About.vue')
  },

  /*
  {
    path: '/folder/:id',
    component: () => import('@/views/FolderPage.vue')
  }
  */
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
