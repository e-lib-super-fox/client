<template>
    <div>
<<<<<<< HEAD
        <b-col cols="12" offset-md="1" md="10" style="margin-top:5rem;" class="card container">
            <b-row>
                <BookElement v-for="(book,index) in books" :idBook="book._id" :key="index" :bookTitle="book.title" :bookPicture="book.image" />
            </b-row>
        </b-col>
    </div>
</template>
<script>
import BookElement from './static/BookElement.vue'
import axios from 'axios'
export default{
    name:'getAllBook',
    components:{ BookElement },
    data () {
        return{
            books: [{isbn:'asfasdfafsdafda',title:"here",picture:"/img/tampilan depan.fd30c096.jpg"},{isbn:'adasfasd',title:'there',picture:"/img/tampilan depan.fd30c096.jpg"}]
        }
    },
    created(){
        axios.get('http://localhost:3000/books/')
        .then(result=>{
            this.books = result.data.books
        })
=======
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
            books: [{title:"here",picture:"/img/tampilan depan.fd30c096.jpg"},{title:'there',picture:"/img/tampilan depan.fd30c096.jpg"}]
        }
>>>>>>> 6da2749f598bbb9b979aeb0e9101da34f0df6c07
    }
}
</script>
<style>
.container{
<<<<<<< HEAD
    min-height:250rem !important;
=======
    min-height:250rem;
>>>>>>> 6da2749f598bbb9b979aeb0e9101da34f0df6c07
}

</style>
