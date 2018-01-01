<template>
  <div class="ndock-register">
    <app-nav></app-nav>
    <h1>Please Register</h1>
    <div class="container register-form">
      <div class="panel panel-default">
        <div class="panel-body">
          <form @submit.prevent="handleRegister">
            <div class="input-group register-userinput">
              <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
              <input v-model="credentials.email" id="txtUser" type="text" class="form-control" name="email" placeholder="Email">
            </div>
            <div class="input-group">
              <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
              <input v-model="credentials.password" id="txtPassword" type="password" class="form-control" name="password" placeholder="Password">
              <span id="showPassword" class="input-group-btn">
                <button class="btn btn-default reveal" type="button"><i class="glyphicon glyphicon-eye-open"></i></button>
              </span>  
            </div>
            <button class="btn btn-primary btn-block register-button" type="submit"><i class="fa fa-sign-in"></i> Register</button>
          </form>     
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppNav from './AppNav';
  import auth from '../utils/auth';

  export default {
    name: 'register',
    data() {
      return {
        credentials: {
          email: '',
          password: '',
        },
        error: '',
      };
    },
    components: {
      AppNav,
    },
    methods: {
      handleRegister() {
        auth.register(this, this.credentials, 'dashboard');
      },
    },
  };
</script>

<style scoped>
  .register-form{
    width: 390px;
  }
  .register-title{
    text-align: center;
  }
  .register-userinput{
    margin-bottom: 10px;
  }
  .register-button{
    margin-top: 10px;
  }
  .register-options{
    margin-bottom: 0px;
  }
  .register-forgot{
    float: right;
  }
</style>
