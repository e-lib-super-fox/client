import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DetailBook from './views/DetailBook.vue'
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
      path: '/detail-book/:isbn',
      name: 'detailBook',
      component: DetailBook
    },
    {
      path: '/add-book',
      name: 'addbook',
      component: AddBook
    }
  ]
})
