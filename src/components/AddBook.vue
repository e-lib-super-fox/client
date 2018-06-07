<template>
    <b-container>
        <form action="">
            <input type="text">
            <input type="text">
            <input type="text">
            <button>submit</button>
        </form>
    </b-container>
</template>
<script>
export default{
    data () {
        return {

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
