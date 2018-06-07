<template>
  <b-container fluid>

    <b-card no-body>
      <b-tabs pills card>
        <b-tab title="Tab 1" active>
          <div class="panel-heading">
            <h3 class="panel-title">Sign In</h3>
          </div>
          <div class="panel-body">
              <fieldset>
                  <div class="form-group">
                    <label>Email</label>
                    <input class="form-control" placeholder="E-mail" type="email" v-model="email" required>
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input class="form-control" placeholder="Password" type="password" v-model="password" required>
                  </div>
                  <button class="btn btn-sm btn-success" @click="login">Login</button>
              </fieldset>
          </div>
        </b-tab>
        <b-tab title="Tab 2">
          <div class="panel-heading">
            <h3 class="panel-title">Register</h3>
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

<!-- tabs-pills.vue -->
    
    <!-- <b-row>
      <b-col cols="4" offset="2">
        <div class="panel-heading">
            <h3 class="panel-title">Sign In</h3>
        </div>
        <div class="panel-body">
            <fieldset>
                <div class="form-group">
                  <label>Email</label>
                  <input class="form-control" placeholder="E-mail" type="email" v-model="email" required>
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input class="form-control" placeholder="Password" type="password" v-model="password" required>
                </div>
                <button class="btn btn-sm btn-success" @click="login">Login</button>
            </fieldset>
        </div>
      </b-col>

      <b-col cols="4">
        <div class="panel-heading">
            <h3 class="panel-title">Register</h3>
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
      </b-col>
    </b-row> -->
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
      console.log(this.email, this.password);
      let account = {
        email: this.email,
        password: this.password
      }

      axios
        .post('http://localhost:3000/users/signin', account)
        .then( (response) => {

        })
        .catch(error => {
          console.log(error);
          
        })
      
    },
    register () {
      console.log(this.email, this.username, this.password);
      let account = {
        email: this.email,
        password: this.password,
        username: this.username
      }

      axios
        .post('http://localhost:3000/users/signup', account)
        .then( (response) => {

        })
        .catch(error => {
          console.log(error);
          
        })
    }
  }
}
</script>

<style scoped>
</style>
