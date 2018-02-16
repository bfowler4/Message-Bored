const bookshelf = require(`./bookshelf`);
require(`./User`);

class Topic extends bookshelf.Model {
  get tableName() { return `topics`; }
  get hasTimestamps() { return true; }

  messages() {
    return this.hasMany(`Message`);
  }
  
  user() {
    return this.belongsTo(`User`);
  }
}

module.exports = bookshelf.model(`Topic`, Topic);