<template>
  <div class="ndock-dashboard">
    <app-nav></app-nav>
    <h1>Dashboard</h1>
    <p>Yay you made it!</p>
    <p>{{ email }}</p>
  </div>
</template>

<script>
  import AppNav from './AppNav';
  import api from '../utils/api';

  export default {
    name: 'dashboard',
    data() {
      return {
        email: '',
      };
    },
    mounted() {
      api.getUser(this, 'login')
        .then((response) => {
          this.email = response.email;
        });
    },
    components: {
      AppNav,
    },
  };
</script>
