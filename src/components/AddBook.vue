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
            <img :src="imageUrl" alt="">
            <input type="file" name="image" id="" accept="image/*" @change="changeImage" ><br>
            bookFile <br>
            <input type="file" accept="application/pdf" name="pdfFile" @change="bookFile"><br><br>
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
            imageUrl:'',
            image:'',
            file:''
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
            const url = `https://dwikyerl.me/books/info?isbn=${this.isbn}`
            axios.get(url,{ headers:{ authorization:localStorage.getItem('token') } }).then(
                response=>{
                    let { authors,title,description,image } = response.data.bookInfo
                    this.Title = title
                    this.Authors = authors
                    this.Description = description
                    console.log(this.$refs.image)
                    this.imageUrl = image
                }
            ).catch(err =>{
                console.log(err)
            })
            this.isbnForm=false
        },
        addBook:function(book){
            let formData = new FormData()

            formData.append('isbn',this.isbn)
            formData.append('title',this.Title)
            formData.append('authors',this.Authors)
            formData.append('description',this.Description)
            formData.append('imageUrl',this.imageUrl)
            formData.append('image',this.image)

            axios.post('https://dwikyerl.me/books/add',{
            },{ headers: { authorization:localStorage.getItem('token') } })
        },
        changeImage: function(event){
            this.image = event.target.files[0]
        },
        bookFile: function(event){
            this.file = event.target.files[0]
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
