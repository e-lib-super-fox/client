<template>
  <b-col style="margin-top:5rem;" cols="12" offset-md="2" md="8">
    <b-col offset="4" cols="4" >
      <b-row class="switchWrapper">
          <button class="toggleButton active" @click = "ShowLoginForm" ref="Login">Login</button>
          <button class="toggleButton" @click = "RegisterForm" ref="Register">Register</button>
      </b-row>
    </b-col>
    <div class="card" style="padding:7rem; margin-top:5rem;">
      <LoginForm v-if="LoginForm"/>
      <RegisterForm v-else/>
    </div>
  </b-col>
</template>

<script>
import LoginForm from './LoginForm.vue'
import RegisterForm from './RegisterForm.vue'

export default {
  name:'forms',
  components:{ LoginForm, RegisterForm },
  data () {
    return {
      LoginForm:true
    }
  },
  methods : {
    ShowLoginForm(){
      this.LoginForm = true
      this.$refs.Login.classList.remove("active")
      this.$refs.Register.classList.remove("active")
      this.$refs.Login.classList.add("active")
    },
    RegisterForm(){
      this.LoginForm = false
      this.$refs.Login.classList.remove("active")
      this.$refs.Register.classList.remove("active")
      this.$refs.Register.classList.add("active")
    }
  }
}
</script>

<style scoped>
.toggleButton{
  display:flex;
  justify-content: center;
  background-color: rgba(0,0,0,0);
  border:0;
  width:50%;
}

.toggleButton:focus, .toggleButton:active {
  outline:none;
}

.active{
  background-color:#02c5d7;
  color: white !important;
}

.switchWrapper{
  padding:0;
  display:flex;
  justify-content:space-between;
  align-content:stretch;
  justify-content:center;
  border-radius:.3rem;
  border: 1px solid rgba(0,0,0,.3);
}
</style>
