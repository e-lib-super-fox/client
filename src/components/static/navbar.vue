<template>
    <b-navbar class="nav-bg">
        <b-navbar-brand>
            <span id="brand" class="icon-userIcon"/>
        </b-navbar-brand>
    </b-navbar>
</template>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#brand{
    font-size: 5rem;
}
.nav-bg{
  background-color: #02c5d7
}
</style>
