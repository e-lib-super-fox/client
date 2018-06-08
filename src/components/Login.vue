<template>
  <b-container fluid>
    <b-col cols="12" md="4" offset-md="4">
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Login" active>
            <div class="panel-heading">
            </div>
            <div class="panel-body">
              <fieldset>
                <div class="form-group">
                  <label>Email or username</label>
                  <input class="form-control" placeholder="E-mail or Username" type="email" v-model="email" required>
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input class="form-control" placeholder="Password" type="password" v-model="password" required>
                </div>
                <button class="btn btn-sm btn-success" @click="login">Login</button>
              </fieldset>
            </div>
          </b-tab>
          <b-tab title="Register">
            <div class="panel-heading">
            </div>
            <div class="panel-body">
              <fieldset>
                <div class="form-group">
                  <label>Email</label>
                  <input class="form-control" placeholder="E-mail" type="email" v-model="email">
                </div>
                <div class="form-group">
                  <label>username</label>
                  <input class="form-control" placeholder="username" type="text" v-model="username">
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input class="form-control" placeholder="Password" type="password" v-model="password">
                </div>
                <button class="btn btn-sm btn-success" @click="register">register</button>
              </fieldset>
            </div>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-col>
  </b-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      username: '',
      password: ''
    }
  },
  methods : {
    login () {
      if(this.email == '' || this.password == '') {
        alert('email and password is required')
      }

      console.log(this.email, this.password);
      let account = {
        email: this.email,
        password: this.password
      }
      // localStorage.setItem('token', '123')
      // localStorage.setItem('role', 'admin')
      // location.reload()

      axios
        .post('http://localhost:3000/users/signin', account)
        .then( (response) => {
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('role', response.data.role)
          location.reload()
        })
        .catch(error => {
          console.log(error);
          alert('login failed')
        })
      
    },
    register () {
      if(this.email == '' || this.username == '' || this.password == '') {
        alert('data is required')
      }
      console.log(this.email, this.username, this.password);
      let account = {
        email: this.email,
        password: this.password,
        username: this.username
      }

      axios
        .post('http://localhost:3000/users/signup', account)
        .then( (response) => {
          console.log(response);
          alert('register success')
          location.reload()
        })
        .catch(error => {
          console.log(error);
          alert('register failed')          
        })
    }
  }
}
</script>

<style scoped>
.container-fluid{
  margin-top: 5rem
}
</style>
