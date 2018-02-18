const express = require(`express`);
const router = express.Router();
const User = require(`../db/models/User`);
const usersRoute = require(`./users`);
const topicsRoute = require(`./topics`);
const messagesRoute = require(`./messages`);

// authentication modules
const passport = require(`passport`);
const LocalStrategy = require(`passport-local`);
const bcrypt = require(`bcrypt`);

const saltRounds = 12;

module.exports = router;

passport.serializeUser((user, done) => {
  console.log(`serializing`);
  return done(null, {
    id: user.id,
    username: user.username
  });
});

passport.deserializeUser((user, done) => {
  console.log(`deserializing`);
  return new User({ id: user.id })
  .fetch()
  .then(user => {
    user = user.toJSON();
    return done(null, {
      id: user.id,
      username: user.username
    });
  });
});

passport.use(new LocalStrategy(function(username, password, done) {
  new User({ username: username }).fetch()
  .then(user => {
    if (user === null) {
      return done(null, false, { message: `bad username or password` });
    } else {
      user = user.toJSON();
      bcrypt.compare(password, user.password)
      .then(res => {
        if (res) {
          return done(null, user);
        } else {
          return done(null, false, { message: `bad username or password` });
        }
      });
    }
  })
  .catch(err => { console.log(`error: `, err); });
}));

router.use(`/users`, usersRoute);
router.use(`/topics`, topicsRoute);
router.use(`/messages`, messagesRoute);

router.post(`/login`, passport.authenticate(`local`), (req, res) => {
  return res.json(req.user);
})
.post(`/register`, (req, res) => {
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      let { username } = req.body;
      return new User({ username, password: hash })
      .save()
      .then((user) => {
        return res.json(user);
      })
      .catch(err => { 
        return res.status(400).json({ message: err.message }); 
      })
    });
  });
})
.post(`/logout`, (req, res) => {
  req.logout();
  return res.json({ message: `user logged out` });
});