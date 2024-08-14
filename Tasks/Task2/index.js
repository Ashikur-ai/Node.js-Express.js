const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  fs.readFile('./pages/index.html', (err, data) => {
    if (err) {
      console.log(err);
      res.send(`<h1>Something went wrong</h1>`)
    } else {
      res.write(data);
      res.end();
    }
  })
})


app.get('/about', (req, res) => {
  fs.readFile('./pages/about.html', (err, data) => {
    if (err) {
      console.log(err);
      res.send(`<h2>Something went wrong</h2>`);
    } else {
      res.write(data);
      res.end();
    }
  })
})


app.get('/help', (req, res) => {
  fs.readFile('./pages/help.html', (err, data) => {
    if (err) {
      console.log(err);
      res.send(`<h1>Something went wrong</h1>`);
    } else {
      res.write(data);
      res.end();
    }
  })
})

app.listen(4001, () => {
  console.log('Server is running on port 4001')
})