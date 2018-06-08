<template>
  <div class="home">
    <Home/>
    <login></login>
    <GetAllBook/>

  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import GetAllBook from '@/components/GetAllBook.vue'

export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    Home,
    Login,
    GetAllBook
  },
  data () {
    return {
      isLogin : true
    }
  },
  created () {
    if (localStorage.hasOwnProperty('token')) {
      this.isLogin = true
    }
  }
}
</script>