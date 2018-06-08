
<template>
  <DetailBook/>
</template>

<script>
import DetailBook from '@/components/DetailBook.vue'
export default {
  name: 'detailBook',
  components:{ DetailBook },
  data () {
    return {
    }
  },
  created () {
    let id = parseInt(this.$route.params.id)
    let book = this.books.filter( book => book.id === id)
    this.book = book[0]
    console.log(book);
    
  },
  methods : {
  }
}
</script>

<style scoped>
