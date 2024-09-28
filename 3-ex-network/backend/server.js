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
  host: 'db',
  port: 3306,
  user: 'user',
  password: 'password',
  database: 'database'
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
