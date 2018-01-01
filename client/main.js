import Vue from 'vue';
import App from './App';
import router from './router';

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
