<template>
  <div class="ndock-dashboard">
    <app-nav></app-nav>
    <h1>Dashboard</h1>
    <p>Yay you made it!</p>
  </div>
</template>

<script>
  import AppNav from './AppNav';

  export default {
    name: 'dashboard',
    components: {
      AppNav,
    },
  };
</script>
