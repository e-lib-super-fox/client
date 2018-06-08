<template>
  <div class="home">
  <div v-if="isLogin"> berarti sudah login</div>
    <login v-else></login>
  </div>
</template>

<script>
// @ is an alias to /src
import GetAllBook from '@/components/GetAllBook.vue'

export default {
  name: 'getallbook',
  components: {
    GetAllBook
  }
}
</script>
