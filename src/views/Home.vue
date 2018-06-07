<template>
  <div class="home">
    <GetAllBook/>
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
