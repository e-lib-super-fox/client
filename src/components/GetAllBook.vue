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
            books: [{title:"here",picture:"/img/tampilan depan.fd30c096.jpg"},{title:'there',picture:"/img/tampilan depan.fd30c096.jpg"}]
        }
    }
}
</script>
<style>
.container{
    min-height:250rem;
}

</style>
