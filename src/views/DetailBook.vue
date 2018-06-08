<template>
  <b-container class="card text-left" style="padding:1rem">
    <b-row>
      <b-col cols="12" md="3">
        <img :src="book.image" width="200"/>
      </b-col>
      <b-col cols="12" md="7">
        <h1 style="font-weight: bold">{{ book.title }}</h1>
        <ul>
          <b-media tag="li"><b>ISBN:</b> {{ book.isbn }}</b-media>
          <b-media tag="li"><b>Author:</b> {{ book.authors}}</b-media>
        </ul>
        <p>
          {{ book.description }}
        </p>
      </b-col>
      <b-col cols="12" md="2">
        <b-button variant="success" @click="downloadFile"> Download Book <i class="fas fa-download"></i> </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios'
import FileSaver from 'file-saver'
import { parse } from 'querystring';

export default {
  name: 'detailBook',
  data () {
    return {
      books: [
        {
          id: 1,
          isbn: '893432-38243',
          title: 'No Title 1',
          authors: 'unknown',
          description: `
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          `,
          file: 'tes.pdf',
          image: 'https://lightning.od-cdn.com/22.0.1-build-1729-master/public/img/no-cover_en_US.jpg',
          uploader: 'unknown'
        },{
          id: 2,
          isbn: '893432-38243',
          title: 'No Title 2',
          authors: 'unknown',
          description: `
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          `,
          file: 'tes.pdf',
          image: 'https://lightning.od-cdn.com/22.0.1-build-1729-master/public/img/no-cover_en_US.jpg',
          uploader: 'unknown'
          }
        ],
      book: {}
    }
  },
  created () {
    console.log(localStorage.getItem('token'));
    
    if(!localStorage.getItem('token')) {
      this.$router.push('/')
    } else {
      let id = parseInt(this.$route.params.id)
      let book = this.books.filter( book => book.id === id)
      this.book = book[0]
      console.log(book);
    }
      
  },
  methods : {
    downloadFile () {
      let fileName = this.filename || '1528424849289Vue-Essentials-Cheat-Sheet.pdf'
      axios({
        url: `http://localhost:3000/download?q=${fileName}`,
        method: 'GET',
        responseType: 'blob', // important
      }).then((response) => {
        let blob = new Blob([response.data])
        console.log(blob);
        FileSaver.saveAs(blob, fileName)
      })
      .catch( err => {
        console.log(err);
        
      })
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 5rem
}
</style>
