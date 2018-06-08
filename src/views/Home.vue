<template>
  <div class="home">
  <div v-if="isLogin"> berarti sudah login</div>
    <login v-else></login>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import DetailBook from '@/components/DetailBook.vue'

export default {
  name: 'home',
  components: {
    Home,
    Login,
    DetailBook
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
