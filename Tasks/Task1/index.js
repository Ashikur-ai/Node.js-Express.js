let express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("Server is healthy");
})

app.get('/about', (req, res) => {
  res.send("Sending about information")
})

app.get('/contact', (req, res) => {
  res.send("Sending data of contact us");
})

app.get("/career", (req, res) => {
  res.send("Sending data of career");
})

app.listen(4000, () => {
  console.log('Server is running on port 4000')
})