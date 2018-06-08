<template>
    <b-container style="margin-top:5rem;">
        <form v-if="isbnForm" method="POST" @submit.prevent="sendisbnReq">
            Put Your ISBN Here
            <input v-model="isbn" type="text" name="isbn">
            <button>submit</button>
        </form>
        <form v-else method="POST" @submit.prevent="addBook">
            Title <br>
            <input v-model="Title" type="text" name="title"><br>
            Author(s) <br>
            <input v-model="Authors" type="text" name="authors"><br>
            description <br>
            <textarea v-model="Description" name="description" id="" cols="30" rows="10"></textarea><br>
            image <br>
            <input type="file" name="image" id="" accept="image/*"><br>
            bookFile <br>
            <input type="file" accept="application/pdf" name="pdfFile"><br><br>
            <button type="submit">Submit</button>
        </form>
    </b-container>
</template>
<script>
import axios from "axios"
export default{
    
    data () {
        return {
            isbnForm:true,
            isbn:'',
            Title:'',
            Authors:'',
            Description:'',
        }
    },
    created(){
        axios.post('http://localhost:3000/verify',{},{ headers:{ authorization:localStorage.getItem('token') } })
        .then(result =>{
            if(result.status === 403) {
                localStorage.removeItem('token')
                localStorage.removeItem('role')
                localStorage.removeItem('username')
                localStorage.removeItem('email')
                
                window.location = '/'
            }
        })
    },
    methods:{
        sendisbnReq:function(){
            const url = `http://localhost:3000/books/info?isbn=${this.isbn}`
            console.log(this.isbn)
            console.log(url)
            console.log(localStorage.getItem('token') )
            axios.get(url,{ headers:{ authorization:localStorage.getItem('token') } }).then(
                response=>{
                    console.log(response)
                }
            ).catch(err =>{
                console.log(err)
            })
            this.isbnForm=false
        },
        addBook:function(book){

        }
    },
    props: ['bookTitle','bookPicture']
}
</script>
<style>
.bookContainer{
    margin-top:1.5rem;
    height:25rem;
}
.bookImageContainer{
    width:100%;
    height:20rem;
}
.bookImg{
    max-height:100%;
    max-width:100%;
}
.bookContainer:hover{
    cursor: pointer;
}
</style>
