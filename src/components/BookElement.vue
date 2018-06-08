<template>
    <b-col class="bookContainer" cols="4" md="3">
        <div class="bookImageContainer">
            <img class="bookImg img-thumbnail" :src="book.image" alt="">
        </div>
        <div class="captions">
            <h1>
				<router-link :to="'/books/' + book.id">
                    {{book.title}}
				</router-link>
            </h1>
        </div>
    </b-col>
</template>
<script>
export default{
    data () {
        return {
        }
    },
    props: ['book']
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