<template>
    <div>
        <GetAllBook v-if="LoggedIn||skipLogin"/>
        <Forms v-else/>
    </div>
</template>
<script>
import GetAllBook from './GetAllBook.vue'
import Forms from './Forms.vue'
export default{
    components:{ GetAllBook, Forms },
    data () {
        return {
            LoggedIn:false,
            skipLogin:false,
        }
    }
}
</script>
<style>


</style>
