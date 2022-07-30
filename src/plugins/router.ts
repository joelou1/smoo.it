import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Play from '@/views/Play.vue'
import Host from '@/views/Host.vue'
import Servers from '@/views/Servers.vue'
import FAQ from '@/views/FAQ.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    name : 'home',
    path : '/',
  },
  {
    name      : 'play',
    path      : '/play/:id?',
    component : Play,
  },
  {
    name      : 'host',
    path      : '/host/:id?',
    component : Host,
  },
  {
    name      : 'servers',
    path      : '/servers',
    component : Servers,
  },
  {
    name      : 'faq',
    path      : '/faq/:id?',
    component : FAQ,
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes,
})

export default router
