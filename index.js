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
require('./routes/auth')(app);
require('./routes/billing')(app);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req,res) => {
    res.sendFile('Hewllo');
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server run at port ${PORT}`);
});
