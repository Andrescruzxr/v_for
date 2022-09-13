import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mostrarvue from '../views/mostrarvue.vue'
import Registrar from '../views/Registrar.vue'
import Editar from '../views/Editar.vue'
import ListarPosts from '../views/PostS/ListarPosts.vue'
import EditarPosts from '../views/PostS/EditarPosts.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mostrarvue',
    name: 'mostrarvue',
    component: mostrarvue
  },
  {
    path: ':id/EditarPosts/',
    name: 'EditarPosts',
    component: EditarPosts
  },
  {
    path: '/ListarPosts',
    name: 'ListarPosts',
    component: ListarPosts
  },
  {
    path: '/Editar/:id',
    name: 'Editar',
    component: Editar,
  },
  {
    path: '/Registrar',
    name: 'Registrar',
    component: Registrar
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
