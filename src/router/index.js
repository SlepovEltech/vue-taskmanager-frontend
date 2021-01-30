import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Create',
      component: () => import('../views/Create.vue'),
      props: true
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/List.vue'),
      props: true

    },
    {
      path: '/task/:id',
      name: 'task' ,
      component: () => import('../views/Task.vue'),
      props: true

    },
  ]
})

export default router
