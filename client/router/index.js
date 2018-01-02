/* eslint no-undef: 0 */
import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import Home from '../components/Home';
import DashBoard from '../components/Dashboard';
import Login from '../components/Login';
import Register from '../components/Register';
import auth from '../utils/auth';

Vue.use(VueResource);
Vue.use(Router);

auth.checkAuth();

Vue.http.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/dashboard',
      name: 'DashBoard',
      component: DashBoard,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Home,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
  ],
});
