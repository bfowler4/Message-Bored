const express = require(`express`);
const router = express.Router();
const User = require(`../../db/models/User`);
module.exports = router;

router.route(`/`)
.get((req, res) => {
  return User.fetchAll()
  .then((users) => {
    return res.json(users);
  })
  .catch((err) => {
    return res.json({ message: err.message });
  });
})
.post((req, res) => {
  let { username, password } = req.body;

  return new User({ username, password })
  .save()
  .then((user) => {
    console.log(user.toJSON());
    return res.json(user);
  })
  .catch((err) => {
    return res.json({ message: err.message });
  });
});

router.route(`/:id`)
.get((req, res) => {
  return new User({ id: req.params.id })
  .fetch({ withRelated: `messages` })
  .then((user) => {
    return res.json(user);
  })
  .catch((err) => {
    return res.json({ err: err.message });
  });
});