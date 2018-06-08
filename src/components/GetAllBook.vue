<template>
  <div>
    <b-container style="margin-top:5rem;" class="card">
      <b-row>
        <BookElement v-for="(book,index) in books" :key="index" :bookTitle="book.title" :bookPicture="book.picture" />
      </b-row>
    </b-container>
  </div>
</template>
<script>
import BookElement from './BookElement.vue'
export default{
  components:{ BookElement },
  data () {
    return{
      books: [
        {
          title:"here",
          picture:"https://lightning.od-cdn.com/22.0.1-build-1729-master/public/img/no-cover_en_US.jpg"
        },{
          title:'there',
          picture:"https://lightning.od-cdn.com/22.0.1-build-1729-master/public/img/no-cover_en_US.jpg"
          }
        ]
    }
  }
}
</script>
<style>
.container{
    min-height:250rem;
}
</style>