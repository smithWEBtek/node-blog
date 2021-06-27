// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'node_blog_development',
      user: 'deploy',
      password: 'pointer'
    }
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'deploy',
      password: 'pointer'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'deploy',
      password: 'pointer'
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
