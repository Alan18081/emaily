const express = require('express');
const mongoose = require('mongoose');
const cookiesSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');

mongoose.connect(keys.mongoURI);
require('./models/User');

const app = express();

app.use(bodyParser.json());
app.use(
  cookiesSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./services/passport');
// require('./routes/auth')(app);
require('./routes/billing')(app);

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile','email']
}));

app.get('/auth/google/callback', passport.authenticate('google'), (req,res) => {
  res.redirect('/surveys');
});

app.get('/api/current_user', (req,res) => {
  res.send(req.user);
});

app.get('/api/logout', (req,res) => {
  req.logout();
  res.redirect('/');
});

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('/*', (req,res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server run at port ${PORT}`);
});
