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
    username: 'postgres',
    password: 'sua_senha_aqui',
    database: 'postgres',
    host: 'db.cfrxekzacbqaicirfvnk.supabase.co',
    port: 6543,
    dialect: 'postgres',
  },
  production: {
    username: 'postgres',
    password: 'sua_senha_aqui',
    database: 'postgres',
    host: 'db.cfrxekzacbqaicirfvnk.supabase.co',
    port: 6543,
    dialect: 'postgres',
  },
};