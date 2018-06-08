<template>
  <div class="home">
<<<<<<< HEAD
    <Home/>
=======
  <div v-if="isLogin"> berarti sudah login</div>
    <login v-else></login>
>>>>>>> 6da2749f598bbb9b979aeb0e9101da34f0df6c07
  </div>
</template>

<script>
// @ is an alias to /src
<<<<<<< HEAD
import Home from '@/components/Home.vue'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    Home,
=======
import GetAllBook from '@/components/GetAllBook.vue'

export default {
  name: 'getallbook',
  components: {
    GetAllBook
>>>>>>> 6da2749f598bbb9b979aeb0e9101da34f0df6c07
  }
}
</script>
