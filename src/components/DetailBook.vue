<template>
<<<<<<< c22627c8209e6202633d9a2a00860a90cab253dd
  <b-col cols="12">
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
        <b-button variant="primary" @click="downloadFile"> Download </b-button>
      </b-col>
    </b-row>
  </b-col>
</template>
=======
  <b-container>
    <b-row>
      <b-col cols="3">col-8</b-col>
      <b-col cols="7">col-4</b-col>
      <b-col cols="2">
        <b-button variant="primary"> Download </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

>>>>>>> fitur login
<script>
import axios from 'axios'

export default {
<<<<<<< c22627c8209e6202633d9a2a00860a90cab253dd
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
        uploader: 'unknown'
      }
    }
  },
  methods : {
    downloadFile () {

    }
  }
}
</script>
<style>

=======
  name: 'login',
  data () {
    return {
    }
  },
  methods : {
    
  }
}
</script>

<style scoped>
>>>>>>> fitur login
</style>
