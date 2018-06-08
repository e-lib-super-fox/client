<template>
    <b-col cols="4" offset="4">
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
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            email: '',
            username: '',
            password: ''
        }
    },
    methods : {
        register () {
            let account = {
                email: this.email,
                password: this.password,
                username: this.username
            }

            axios
                .post('http://localhost:3000/signup', account)
                .then( (response) => {
                    console.log(response)
                })
                .catch(error => {
                console.log(error);
                
                })
        }
    }
}
</script>
<style>

</style>
