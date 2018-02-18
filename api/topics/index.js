const express = require(`express`);
const router = express.Router();
const Topic = require(`../../db/models/Topic`);
const isAuthenticated = require(`../../utilities/authenticator`);

module.exports = router;


router.route(`/`)
.get((req, res) => {
  return Topic
  .fetchAll({ withRelated: [`user`, `messages.user`]
  })
  .then((topics) => {
    return res.json(topics);
  })
  .catch((err) => {
    return res.status(400).json({ message: err.message });
  });
})
.post(isAuthenticated, (req, res) => {
  let name = req.body.name;
  let user_id = req.user.id;

  return new Topic({ name, user_id })
  .save()
  .then((topic) => {
    return res.json(topic);
  })
  .catch((err) => {
    return res.status(400).json({ message: err.message });
  });
});

router.route(`/:id`)
.put(isAuthenticated, (req, res) => {
  return new Topic({ id: req.params.id })
  .fetch()
  .then(topic => {
    if (!topic) {
      throw new Error(`Topic was not found`);
    } else if (topic.attributes.user_id != req.user.id) {
      throw new Error(`Forbidden`);
    }
    return topic.save({ name: req.body.name });
  })
  .then(topic => {
    return res.json(topic);
  })
  .catch((err) => {
    return res.json({ message: err.message });
  });
});