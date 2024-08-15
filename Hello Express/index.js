const express = require("express");
const fs = require('fs');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
  fs.readFile('./pages/index.html', (err, data) => {
    if (err) {
      console.log('Error', err);
      res.send(`<h1>Something went wrong</h1>`);
    } else {
      res.write(data);
      res.end()
    }
  })
})

app.get('/about', (req, res) => {
  res.send(`<h1>This is about route</h1>`)
})

app.get('/help', (req, res) => {
  res.send(`<h1>This is help route</h1>`)
})

app.listen(5000, () => {
  console.log("Server is running on port 5000");
})