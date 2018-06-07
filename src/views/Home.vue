<template>
  <div class="home">
    <Home/>
    <login></login>
    <DetailBook/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import DetailBook from '@/components/DetailBook.vue'

export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    Home,
    Login,
    DetailBook
  }
}
</script>
