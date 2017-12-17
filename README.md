# nDock
A notes sharing web app.

## Development
- Add `development.js` in `/server/env`
- Fill out keys in `development.js`

```js
module.exports = {
  "DATABASE_URI": "INSERT_DATABASE_URI_HERE" // mongodb://localhost or mlab uri,
  "SECRET": "INSERT_JWT_SECRET_HERE",
  "TWITTER": {
    "consumerKey": "INSERT_TWITTER_CONSUMER_KEY_HERE",
    "consumerSecret": "INSERT_TWITTER_CONSUMER_SECRET_HERE",
    "callbackUrl": "INSERT_TWITTER_CALLBACK_HERE"
  },
  "FACEBOOK": {
    "clientID": "INSERT_FACEBOOK_CLIENTID_HERE",
    "clientSecret": "INSERT_FACEBOOK_CLIENT_SECRET_HERE",
    "callbackURL": "INSERT_FACEBOOK_CALLBACK_HERE"
  },
  "GOOGLE": {
    "clientID": "INSERT_GOOGLE_CLIENTID_HERE",
    "clientSecret": "INSERT_GOOGLE_CLIENT_SECRET_HERE",
    "callbackURL": "INSERT_GOOGLE_CALLBACK_HERE"
  }
};
```
- Run `npm install nodemon -g`
- Run `npm install`
- Run `npm run start`