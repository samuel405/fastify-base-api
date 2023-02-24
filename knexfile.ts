import type { Knex } from 'knex';
import {
  DB_HOST,
  DB_NAME,
  DB_PASS,
  DB_USER,
  ENV
} from './src/constants';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql',
    connection: {
      host: DB_HOST || '',
      database: DB_NAME || '',
      user: DB_USER || '',
      password: DB_PASS || ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/src/database/migrations'
    },
    seeds: {
      directory: __dirname + '/src/database/seeds'
    },
  },
  production: {
    client: 'mysql',
    connection: {
      host: DB_HOST || '',
      database: DB_NAME || '',
      user: DB_USER || '',
      password: DB_PASS || ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/src/database/migrations'
    },
    seeds: {
      directory: __dirname + '/src/database/seeds'
    },
  },
};

export default config[ENV || 'development'];
