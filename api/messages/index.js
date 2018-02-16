const express = require(`express`);
const router = express.Router();
const Message = require(`../../db/models/Message`);
module.exports = router;

router.get(`/latest`, (req, res) => {
  return Message
  .query(function (qb) {
    qb.limit(10)
  })
  .orderBy(`created_at`, `DESC`)
  .fetchAll({ withRelated: {
    topic(query) {
      query.select(`name`, `id`);
    },
    user(query) {
      query.select(`username`, `id`);
    }
  }})
  .then((messages) => {
    return res.json(messages);
  })
  .catch((err) => {
    return res.json({ message: err });
  });
})
.get(`/by-topic/:topic_id`, (req, res) => {
  return Message
  .where({ topic_id: req.params.topic_id })
  .orderBy(`created_at`, `ASC`)
  .fetchAll({ withRelated: {
    user(query) {
      query.select(`username`, `id`);
    },
    topic(query) {
      query.select(`name`, `id`);
    }
  }})
  .then((messages) => {
    return res.json(messages);
  })
  .catch((err) => {
    return res.json({ message: err.message });
  });
})
.post(`/`, (req, res) => {
  let { body, user_id, topic_id } = req.body;

  return new Message({ body, user_id, topic_id })
  .save()
  .then((message) => {
    return res.json(message);
  })
  .catch((err) => {
    return res.json({ message: err.message });
  });
});