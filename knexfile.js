// Update with your config settings.
const path = require(`path`);

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'bookshelf_demo_user',
      password: 'password',
      database: 'bookshelf_demo_dev',
      charset: 'utf8'
    },
    migrations: {
      directory: path.join(__dirname + '/db/migrations')
    },
    seeds: {
      directory: path.join(__dirname + '/db/seeds')
    },
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
