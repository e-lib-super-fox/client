<template>
    <div>
        <GetAllBook v-if="LoggedIn||skipLogin"/>
        <div v-else>
            <Forms/>
            <a @click="toSkipLogin">skip to See All Books>>>></a>
        </div>
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
    },
    methods: {
        toSkipLogin: function(){
            this.skipLogin = true
        }
    }
}
</script>
<style>


</style>
