// knexfile.mjs
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

export default {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite',
    },
    migrations: {
      directory: 'src/database/migrations',
    },
    useNullAsDefault: true,
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    useNullAsDefault: true,
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 1000,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
