// Update with your config settings.

const { pseudoRandomBytes } = require('crypto')

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'pds',
      user: 'postgres',
      password: '123456'
    },
    migrations: {
      tableName: 'knex_migration',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },
  onUpdateTrigger: table => 
    `CREATE TRIGGER ${table}_updated_at
     BEFORE UPDATE ON ${table}
     FOR EACH ROW
     EXECUTE PROCEDURE on_update_timestamp();
    `
  
}
