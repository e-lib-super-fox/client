<template>
<<<<<<< 76aec296c8baddf948326d1c76ee3e36f274bb5b
    <div>
        <b-col cols="12" offset-md="1" md="10" style="margin-top:5rem;" class="card container">
            <b-row>
                <BookElement v-for="(book,index) in books" :key="index" :bookTitle="book.title" :bookPicture="book.picture" />
            </b-row>
        </b-col>
    </div>
</template>
<script>
import BookElement from './static/BookElement.vue'
export default{
    name:'getAllBook',
    components:{ BookElement },
    data () {
        return{
            books: [{title:"here",picture:"/img/tampilan depan.fd30c096.jpg"},{title:'there',picture:"/img/tampilan depan.fd30c096.jpg"}]
        }
    }
=======
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
>>>>>>> allbook page
}
</script>
<style>
.container{
<<<<<<< 76aec296c8baddf948326d1c76ee3e36f274bb5b
    min-height:250rem !important;
}

</style>
=======
    min-height:250rem;
}
</style>
>>>>>>> allbook page
