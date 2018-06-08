<template>
    <b-col cols="4" offset="4">
      <div class="panel-heading">
          <h3 class="panel-title">Login</h3>
      </div>
      <div class="panel-body">
          <fieldset>
              <div class="form-group">
                <label>Email or username</label>
                <input class="form-control" placeholder="E-mail/username" type="email" v-model="user" required>
              </div>
              <div class="form-group">
                <label>Password</label>
                <input class="form-control" placeholder="Password" type="password" v-model="password" required>
              </div>
              <button class="btn btn-sm btn-success" @click="login">Login</button>
          </fieldset>
      </div>
    </b-col>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            user: '',
            password: ''
        }
    },
    methods : {
    login () {
        console.log(this.user, this.password);
        let account = {
            user: this.user,
            password: this.password
        }

        axios
            .post('http://localhost:3000/signin', account)
            .then( (response) => {
                localStorage.setItem('token',response.data.token)
                 window.location = '/'
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
