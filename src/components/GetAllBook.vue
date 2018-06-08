<template>
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
}
</script>
<style>
.container{
    min-height:250rem !important;
}

</style>
