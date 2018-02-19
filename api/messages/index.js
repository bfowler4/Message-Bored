const express = require(`express`);
const router = express.Router();
const Message = require(`../../db/models/Message`);
const isAuthenticated = require(`../../utilities/authenticator`);
const handleError = require(`../../utilities/errorHandler`);

module.exports = router;


router.get(`/latest`, (req, res) => {
  return Message
  .query(function (qb) {
    qb.limit(10)
  })
  .orderBy(`created_at`, `DESC`)
  .fetchAll({ withRelated: [`user`, `topic`]
  })
  .then((messages) => {
    return res.json(messages);
  })
  .catch((err) => {
    return handleError(err, res);
  });
})
.get(`/by-topic/:topic_id`, (req, res) => {
  return Message
  .where({ topic_id: req.params.topic_id })
  .orderBy(`created_at`, `ASC`)
  .fetchAll({ withRelated: [`user`, `topic`]
  })
  .then((messages) => {
    return res.json(messages);
  })
  .catch((err) => {
    return handleError(err, res);
  });
})
.post(`/`, isAuthenticated, (req, res) => {
  let { body, topic_id } = req.body;

  return new Message({ body, topic_id, user_id: req.user.id })
  .save()
  .then((message) => {
    return res.json(message);
  })
  .catch((err) => {
    return handleError(err, res);
  });
});