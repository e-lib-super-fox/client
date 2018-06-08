import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
<<<<<<< aa44175848906de0d0d612322d0144d3b1f45a9c
import DetailBook from './views/DetailBook.vue'
import AddBook from './views/AddBook.vue'
=======
import About from './views/About.vue'
import DetailBook from './views/DetailBook.vue'
>>>>>>> fitur detail buku

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
<<<<<<< aa44175848906de0d0d612322d0144d3b1f45a9c
      path: '/add-book',
      name: 'addbook',
      component: AddBook
=======
      path: '/about',
      name: 'about',
      component: About
>>>>>>> fitur detail buku
    }
  ]
})
