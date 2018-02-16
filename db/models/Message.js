const bookshelf = require(`./bookshelf`);

class Message extends bookshelf.Model {
  get tableName() { return `messages`; }
  get hasTimestamps() { return true; }

  user() {
    return this.belongsTo(`User`);
  }

  topic() {
    return this.belongsTo(`Topic`);
  }
}

module.exports = bookshelf.model(`Message`, Message);