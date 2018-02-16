const express = require(`express`);
const server = express();
const bodyParser = require(`body-parser`);
const usersRoute = require(`./api/users`);

const PORT = process.env.PORT || 8080;

server.use(bodyParser.json());
server.use(`/api/users`, usersRoute);

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});