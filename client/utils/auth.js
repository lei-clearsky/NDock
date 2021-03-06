/* eslint no-undef: 0, no-param-reassign: 0 */
import router from '../router';

const LOGIN_URL = '/api/auth/login';
const SIGNUP_URL = '/api/auth/register';

export default {

  user: {
    authenticated: false,
  },

  login(context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds).then((response) => {
      localStorage.setItem('token', response.data.token);
      this.user.authenticated = true;
      if (redirect) {
        router.push(redirect);
      }
    }, (err) => {
      context.error = err;
    });
  },

  register(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds).then((response) => {
      localStorage.setItem('token', response.data.token);

      this.user.authenticated = true;
      if (redirect) {
        router.push(redirect);
      }
    }, (err) => {
      context.error = err;
    });
  },

  logout() {
    localStorage.removeItem('token');
    this.user.authenticated = false;

    router.push('/');
  },

  checkAuth() {
    const jwt = localStorage.getItem('token');

    if (jwt) {
      this.user.authenticated = true;
    } else {
      this.user.authenticated = false;
    }
  },

  getAuthHeader() {
    return {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
  },
};
