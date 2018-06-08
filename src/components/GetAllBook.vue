<template>
  <div>
    <b-container style="margin-top:5rem;" class="card">
      <b-row>
        <BookElement v-for="(book) in books" :key="book.id" :book="book" />
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
        ]
    }
  }
}
</script>
<style>
.container{
<<<<<<< HEAD
    min-height:250rem !important;
}

</style>
=======
    min-height:250rem;
}
</style>
>>>>>>> 446e8e77ef79140fd68b965c4a41eefda3481d96
