<template>
    <b-navbar id="navContainer">
        <b-navbar-brand>
<<<<<<< HEAD
            <a href="/"><span id="brand" class="icon-logo"/></a>
        </b-navbar-brand>
        <b-nav-item-dropdown v-if="LoggedIn" text="<span class='icon-userIcon' />" right>
          <b-dropdown-item v-if="isAdmin" href="#">Add Book</b-dropdown-item>
          <b-dropdown-item @click="logout">Logout</b-dropdown-item>
=======
            <span id="brand" class="icon-logo"/>
        </b-navbar-brand>
        <b-nav-item-dropdown text="<span class='icon-userIcon' />" right>
          <b-dropdown-item v-if="isAdmin" href="#">Add Book</b-dropdown-item>
          <b-dropdown-item href="#">Logout</b-dropdown-item>
>>>>>>> 6da2749f598bbb9b979aeb0e9101da34f0df6c07
        </b-nav-item-dropdown>
    </b-navbar>
</template>
<script>
export default{
    data () {
        return {
<<<<<<< HEAD
            isAdmin: true,
            LoggedIn:false
        }
    },
    created(){
        if(localStorage.getItem('token')) this.LoggedIn = true
    },
    methods:{
        logout: function(){
            localStorage.removeItem('token')
            this.LoggedIn = false
            window.location = '/'
=======
            isAdmin: false
>>>>>>> 6da2749f598bbb9b979aeb0e9101da34f0df6c07
        }
    }
}
</script>

<style lang="scss">
#navContainer{
    background-color:#02c5d7;
}
#brand{
    font-size: 5rem;
    color:white;
}
.icon-userIcon{
    color:white;
    font-size:2.3rem;
}
#__BVID__3__BV_button_{
    color:white !important;
}
.nav-bg{
  background-color: #02c5d7
}
</style>
