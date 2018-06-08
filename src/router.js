import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
<<<<<<< HEAD
import DetailBook from './views/DetailBook.vue'
=======
>>>>>>> 6da2749f598bbb9b979aeb0e9101da34f0df6c07
import AddBook from './views/AddBook.vue'

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
      path: '/detail-book/:isbn',
      name: 'detailBook',
      component: DetailBook
    },
    {
      path: '/add-book',
=======
      path: '/books/add',
>>>>>>> 6da2749f598bbb9b979aeb0e9101da34f0df6c07
      name: 'addbook',
      component: AddBook
    }
  ]
})
