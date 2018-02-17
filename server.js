const express = require(`express`);
const server = express();
const bodyParser = require(`body-parser`);
const apiRouter = require(`./api`);
const usersRoute = require(`./api/users`);
const topicsRoute = require(`./api/topics`);
const messagesRoute = require(`./api/messages`);

const PORT = process.env.PORT || 8080;

server.use(express.static(`public`));
server.use(bodyParser.json());

server.use(`/api`, apiRouter);

server.get(`/*`, (req, res) => {
  return res.sendFile(__dirname + `/public/index.html`);
});

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});