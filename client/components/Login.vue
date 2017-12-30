<template>
	<div class="ndock-login">
		<app-nav></app-nav>
		<h1>Please Login</h1>
		<div class="container login-form">
			<div class="panel panel-default">
				<div class="panel-body">
					<form @submit.prevent="handleLogin">
						<div class="input-group login-userinput">
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
						<button class="btn btn-primary btn-block login-button" type="submit"><i class="fa fa-sign-in"></i> Login</button>	
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
		name: 'login',
		data() {
			return {
				credentials: {
					email: '',
					password: ''
				},
				error: ''
			}
		},
		beforeCreate() {
			if(auth.user.authenticated) {
				// redirect to dashboard
			}
		},
		components: {
			AppNav
		},
		methods: {
			handleLogin() {
				auth.login(this, this.credentials, '/dashboard');
			}
		}
	}
</script>

<style scoped>
	.login-form{
		width: 390px;
	}
	.login-title{
		text-align: center;
	}
	.login-userinput{
		margin-bottom: 10px;
	}
	.login-button{
		margin-top: 10px;
	}
	.login-options{
		margin-bottom: 0px;
	}
	.login-forgot{
		float: right;
	}
</style>
