# nDock
A presentation web app

## Development
- Add `development.js` in `/server/env`
- Fill out keys in `development.js`

```js
module.exports = {
  DATABASE_URI: 'INSERT_DATABASE_URI_HERE', // mongodb://localhost or mlab uri
  SECRET: 'INSERT_JWT_SECRET_HERE',
  TWITTER: {
    consumerKey: 'INSERT_TWITTER_CONSUMER_KEY_HERE',
    consumerSecret: 'INSERT_TWITTER_CONSUMER_SECRET_HERE',
    callbackUrl: 'INSERT_TWITTER_CALLBACK_HERE',
  },
  FACEBOOK: {
    clientID: 'INSERT_FACEBOOK_CLIENTID_HERE',
    clientSecret: 'INSERT_FACEBOOK_CLIENT_SECRET_HERE',
    callbackURL: 'INSERT_FACEBOOK_CALLBACK_HERE',
  },
  GOOGLE: {
    clientID: 'INSERT_GOOGLE_CLIENTID_HERE',
    clientSecret: 'INSERT_GOOGLE_CLIENT_SECRET_HERE',
    callbackURL: 'INSERT_GOOGLE_CALLBACK_HERE',
  },
};
```

- Run `npm install`
- Run `npm install nodemon -g` and `npm run dev:server` to watch changes
- Run `npm run dev` to use webpack devserver for hot reload on client changes, and nodemon for watch server side changes
- Run `npm run lint:eslint` before PR to ensure code quality

## Production
- Run `npm run build`
- Run `NODE_ENV=production MONGOLAB_URI=MLAB_URL_HERE SECRET=JWT_SECRET_HERE npm run start`
