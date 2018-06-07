<template>
  <div class="home">
    <!-- <login></login> -->
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
  components: {
    Home,
    Login,
    DetailBook
  }
}
</script>
