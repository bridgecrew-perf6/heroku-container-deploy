require('dotenv').config();

// const { DB_USER, DB_PASSWORD, DB_DATABASE, DB_HOST, DB_PORT } = process.env;

module.exports = {
  development: {
    username: 'postgres',
    password: 'sua_senha_aqui',
    database: 'postgres',
    host: 'db.cfrxekzacbqaicirfvnk.supabase.co',
    port: 6543,
    dialect: 'postgres',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};