<template>
    <div>
<<<<<<< HEAD
        <GetAllBook v-if="LoggedIn"/>
        <Login v-else/>
=======
        <GetAllBook/>
>>>>>>> some checking on login
    </div>
</template>
<script>
import GetAllBook from './GetAllBook.vue'
<<<<<<< HEAD
import Login from './Login.vue'
export default{
    components:{ GetAllBook, Login },
    data () {
        return {
            LoggedIn:false
=======
export default{
    components:{ GetAllBook },
    data () {
        return {

>>>>>>> some checking on login
        }
    }
}
</script>
<style>


</style>
