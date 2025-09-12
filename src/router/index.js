import { createRouter, createWebHistory } from 'vue-router'
import '@mdi/font/css/materialdesignicons.css'
import Fila from '../views/Fila.vue'
import FilaInterna from '../views/FilaInterna.vue'
import Filas from '../views/Filas.vue'
import Login from '../views/Login.vue'
import FormFila from '../components/Forms/FormFila.vue'
import FormFilaInterna from '../components/Forms/FormFilaInterna.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/fila',
      name: 'fila',
      component: Fila,
    },
    {
      path: '/filainterna',
      name: 'filainterna',
      component: FilaInterna,
    },
    {
      path: '/formfila',
      name: 'formfila',
      component: FormFila,
    },
    {
      path: '/formfilainterna',
      name: 'formfilainterna',
      component: FormFilaInterna,
    },
    {
      path: '/filas',
      name: 'filas',
      component: Filas,
    },
    {
      path: '/filas',
      name: 'filas',
      component: Filas,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
