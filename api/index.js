const express = require(`express`);
const router = express.Router();
const usersRoute = require(`./users`);
const topicsRoute = require(`./topics`);
const messagesRoute = require(`./messages`);
module.exports = router;

router.use(`/users`, usersRoute);
router.use(`/topics`, topicsRoute);
router.use(`/messages`, messagesRoute);
