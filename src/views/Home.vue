<template>
  <div class="home">
    <Home/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    Home,
  }
}
</script>
