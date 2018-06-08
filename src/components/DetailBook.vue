<template>
  <b-col id="wrapper" cols="12" style="margin-top:5rem;">
    <b-row>
      <b-col cols="12" md="3">
        <img :src="book.image" width="200"/>
      </b-col>
      <b-col cols="12" md="7">
        <h2>{{ book.title }}</h2>
        <ul>
          <b-media tag="li">ISBN: {{ book.isbn }}</b-media>
          <b-media tag="li">Author: {{ book.authors}}</b-media>
        </ul>
        <p>
          {{ book.description }}
        </p>
      </b-col>
      <b-col cols="12" md="2">
        <a :href="book.file"><b-button id="download" variant="primary" @click="downloadBook"> Download </b-button></a>
      </b-col>
    </b-row>
  </b-col>
</template>
<script>
import axios from 'axios'

export default {
  name: 'detailBook',
  data () {
    return {
      book: {
        isbn: '893432-38243',
        title: 'No Title',
        authors: 'unknown',
        description: `
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        `,
        file: 'tes.pdf',
        image: 'https://lightning.od-cdn.com/22.0.1-build-1729-master/public/img/no-cover_en_US.jpg',
        uploader: 'unknown',
        filename:'',
        file:''
      }
    }
  },
  created(){
    console.log(this.$route.path.split('/')[2])
    axios.get('http://localhost:3000/books/'+this.$route.path.split('/')[2])
    .then(result=>{
        console.log(result)
        let { authors, description, file, filename, image, isbn, title } = result.data.book
        this.book.isbn = isbn
        this.book.description = description
        this.book.file = file
        this.book.filename = filename
        this.book.image = image===undefined? "https://lightning.od-cdn.com/22.0.1-build-1729-master/public/img/no-cover_en_US.jpg" :image
        this.book.isbn = isbn
        this.book.title = title
    })
  },
  methods : {
    downloadBook: function () {
      axios.get('http://localhost:3000/books/download?q='+this.book.filename)
    }
  }
}
</script>
<style>
#wrapper{
  max-width:100% !important;
}
#download{
  display:flex;
  flex-wrap:wrap;
}
</style>
