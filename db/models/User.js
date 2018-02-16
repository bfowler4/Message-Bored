const bookshelf = require(`./bookshelf`);
require(`./Topic`);
require(`./Message`);

class User extends bookshelf.Model {
  get tableName() { return `users`; }
  get hasTimestamps() { return true; }

  topics() {
    return this.hasMany(`Topic`);
  }

  messages() {
    return this.hasMany(`Message`);
  }
}

module.exports = bookshelf.model(`User`, User);