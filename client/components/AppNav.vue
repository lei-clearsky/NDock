<template>
  <nav class="navbar navbar-default">
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand">Home</router-link>
    </div>
    <ul class="nav navbar-nav navbar-right">
      <li>
        <button class="btn btn-link log" v-show="isLoggedIn" @click="handleLogOut()">Log Out
        </button>
        <button class="btn btn-link log" v-show="!isLoggedIn">
          <router-link to="/login">Log In</router-link>
        </button>
        <button class="btn btn-link log" v-show="!isLoggedIn">
          <router-link to="/register">Register</router-link>
        </button>
         <button class="btn btn-link log" v-show="isLoggedIn">
          <router-link to="/dashboard">Dashboard</router-link>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
  import auth from '../utils/auth';

  export default {
    name: 'appNav',
    data() {
      return {
        isLoggedIn: false,
      };
    },
    mounted() {
      this.isLoggedIn = auth.user.authenticated;
    },
    methods: {
      handleLogOut() {
        auth.logout();
      },
    },
  };
</script>

<style scoped>
  .navbar-right {
    margin-right: 0px;
  }
  .navbar-nav {
    margin-top: 10px;
  }
</style>