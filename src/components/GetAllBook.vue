<template>
    <div>
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
    }
}
</script>
<style>
.container{
    min-height:250rem !important;
}

</style>
