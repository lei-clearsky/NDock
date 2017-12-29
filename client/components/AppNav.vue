<template>
  <nav class="navbar navbar-default">
  	<div class="navbar-header">
  		<router-link to="/" class="navbar-brand">Home</router-link>
  	</div>
  	<ul class="nav navbar-nav navbar-right">
  		<li>
  			<button class="btn btn-link log">
  				<router-link to="/logout">Log Out</router-link>
  			</button>
  			<button class="btn btn-link log">
  				<router-link to="/login">Log In</router-link>
  			</button>
  			<button class="btn btn-link log">
  				<router-link to="/register">Register</router-link>
  			</button>
  			 <button class="btn btn-link log">
  				<router-link to="/dashboard">Dashboard</router-link>
  			</button>
  		</li>
  	</ul>
  </nav>
</template>

<script>
</script>

<style scoped>
	.navbar-right {
		margin-right: 0px;
	}
	.navbar-nav {
		margin-top: 10px;
	}
</style>