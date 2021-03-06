import { createRouter, createWebHistory } from 'vue-router'

const Inicio = () => import('../views/Inicio/index.vue')
const Noticias = () => import('../views/Noticias/index.vue')
const Projetos = () => import('../views/Projetos/index.vue')
const Contato = () => import('../views/Contato/index.vue')
const SobreNos = () => import('../views/SobreNos/index.vue')

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/noticias',
    name: 'Noticias',
    component: Noticias
  },
  {
    path: '/projetos',
    name: 'Projetos',
    component: Projetos
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato
  },
  {
    path: '/sobrenos',
    name: 'SobreNos',
    component: SobreNos
  },
  {
    path: '/:pathMatch(.*)',
    redirect: { name: 'Inicio' }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
