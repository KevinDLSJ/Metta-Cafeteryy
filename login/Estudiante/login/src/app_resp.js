const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:4000/',
  clientID: 'QzwkF9dDeNlRc4BrqwIn8q9DRlcmEXoh',
  issuerBaseURL: 'https://dev-f7ag5rovif07q123.us.auth0.com/'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
