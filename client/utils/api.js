/* eslint no-undef: 0, no-param-reassign: 0 */
import router from '../router';

const BASE_URL = 'http://localhost:8080';
const ME_URL = `${BASE_URL}/api/auth/me`;

export default {
  getUser(context, redirect) {
    const jwt = localStorage.getItem('token');

    return context.$http.get(ME_URL, {
      headers: {
        'x-access-token': jwt,
      },
    }).then(response => response.body, (err) => {
      context.error = err;

      if (redirect) {
        router.push(redirect);
      }
    });
  },
};
