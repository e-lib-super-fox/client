<template>
    <b-navbar id="navContainer">
        <b-navbar-brand>
            <a href="/"><span id="brand" class="icon-logo"/></a>
        </b-navbar-brand>
        <b-nav-item-dropdown v-if="LoggedIn" text="<span class='icon-userIcon' />" right>
          <b-dropdown-item v-if="isAdmin" :href="'/add-book'">Add Book</b-dropdown-item>
          <b-dropdown-item @click="logout">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
    </b-navbar>
</template>
<script>
export default{
    data () {
        return {
            isAdmin: false,
            LoggedIn:false
        }
    },
    created(){
        if(localStorage.getItem('token')) this.LoggedIn = true
        if(localStorage.getItem('role') === 'admin') this.isAdmin = true
    },
    methods:{
        logout: function(){
            localStorage.removeItem('token')
            localStorage.removeItem('role')
            localStorage.removeItem('username')
            localStorage.removeItem('email')
            
            this.LoggedIn = false
            window.location = '/'
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
