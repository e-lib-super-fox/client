import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
<<<<<<< HEAD
import About from './views/About.vue'
import DetailBook from './views/DetailBook.vue'
=======
import AddBook from './views/AddBook.vue'
>>>>>>> some building for the app

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
<<<<<<< HEAD
      path: '/detail-book/',
      name: 'detailBook',
      component: DetailBook
    },
    {
      path: '/about',
      name: 'about',
      component: About
=======
      path: '/books/add',
      name: 'addbook',
      component: AddBook
>>>>>>> some building for the app
    }
  ]
})
