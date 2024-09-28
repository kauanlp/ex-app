const express = require('express');
const mysql = require('mysql');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado ao banco de dados');
});

app.get('/', (req, res) => {
  db.query('SELECT NOW() AS agora', (err, results) => {
    if (err) throw err;
    res.send(`Hora do banco de dados: ${results[0].agora}`);
  });
});

app.listen(3000, () => {
  console.log('Backend rodando na porta 3000');
});
