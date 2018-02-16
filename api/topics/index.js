const express = require(`express`);
const router = express.Router();
const Topic = require(`../../db/models/Topic`);
module.exports = router;

router.route(`/`)
.get((req, res) => {
  return Topic
  .fetchAll({ withRelated: {
    user(query) {
      query.select(`username`, `id`);
    }
  }})
  .then((topics) => {
    return res.json(topics);
  })
  .catch((err) => {
    return res.json({ message: err.message });
  });
})
.post((req, res) => {
  let { name, user_id } = req.body;

  return new Topic({ name, user_id })
  .save()
  .then((topic) => {
    return res.json(topic);
  })
  .catch((err) => {
    return res.json({ message: err.message });
  });
});

router.route(`/:id`)
.put((req, res) => {
  return new Topic({ id: req.params.id })
  .save(req.body, { require: true })
  .then((topic) => {
    return res.json(topic);
  })
  .catch((err) => {
    return res.json({ message: err.message });
  });
});