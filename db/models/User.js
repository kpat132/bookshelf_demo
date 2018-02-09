const bookshelf =require('./bookshelf');

// const User = bookshelf.Model.extend({
//   tableName: 'users'
// });

  class User extends bookshelf.Model{
    get tableName(){return 'users'}
    get hasTimestamp() {return true}
  }

module.exports = User;