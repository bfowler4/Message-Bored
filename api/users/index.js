const express = require(`express`);
const router = express.Router();
const handleError = require(`../../utilities/errorHandler`);
const User = require(`../../db/models/User`);

module.exports = router;


router.route(`/`)
.get((req, res) => {
  return User.fetchAll()
  .then((users) => {
    return res.json(users);
  })
  .catch((err) => {
    return handleError(err, res);
  });
})
.post((req, res) => {
  let { username, password } = req.body;

  return new User({ username, password })
  .save()
  .then((user) => {
    return res.json(user);
  })
  .catch((err) => {
    return handleError(err, res);
  });
});

router.route(`/:id`)
.get((req, res) => {
  return new User({ id: req.params.id })
  .fetch({ withRelated: 
    [
      { 'messages': qb => qb.orderBy(`created_at`, `DESC`) }, 
      `messages.topic` 
    ]
  })
  .then((user) => {
    return res.json(user);
  })
  .catch((err) => {
    return handleError(err, res);
  });
});