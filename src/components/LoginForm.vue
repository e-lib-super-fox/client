<template>
    <b-col cols="4" offset="4">
      <div class="panel-heading">
          <h3 class="panel-title">Login</h3>
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
        }
    }
}
</script>
<style>

</style>
