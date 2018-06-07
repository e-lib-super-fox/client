<template>
    <div>
        <GetAllBook v-if="LoggedIn"/>
        <Login v-else/>
    </div>
</template>
<script>
import GetAllBook from './GetAllBook.vue'
import Login from './Login.vue'
export default{
    components:{ GetAllBook, Login },
    data () {
        return {
            LoggedIn:false
        }
    }
}
</script>
<style>


</style>
