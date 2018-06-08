<template>
  <div class="home">
    <Home/>
    <GetAllBook/>

  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import GetAllBook from '@/components/GetAllBook.vue'

export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    Home,
    GetAllBook
  },
  data () {
    return {
      isLogin : false
    }
  },
  created () {
    if (localStorage.hasOwnProperty('token')) {
      this.isLogin = true
    }
  }
}
</script>