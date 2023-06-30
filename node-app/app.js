// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

// Define routes here

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// app.js (continued)
let tickets = [];

app.get('/', (req, res) => {
  res.render('index', { tickets });
});

app.get('/tickets/create', (req, res) => {
  res.render('create');
});

app.post('/tickets', (req, res) => {
  const { title, description } = req.body;
  const newTicket = { title, description };
  tickets.push(newTicket);
  res.redirect('/');
});
