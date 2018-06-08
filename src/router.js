import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import DetailBook from './views/DetailBook.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/books/:id',
      name: 'detailBook',
      component: DetailBook
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
