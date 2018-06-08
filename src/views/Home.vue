<template>
  <div class="home">
    <GetAllBook v-if="isLogin"/>
    <login v-else ></login>

  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import GetAllBook from '@/components/GetAllBook.vue'

export default {
  name: 'home',
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