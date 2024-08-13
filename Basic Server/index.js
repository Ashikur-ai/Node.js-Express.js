const express = require('express')
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

// middlewares 
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  res.send('server is ok');
})

app.get('/test', async (req, res) => {
  res.send('test is working');
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})