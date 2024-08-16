const express = require("express");

const cors = require('cors');
const morgan = require('morgan');
const router = express.Router();
const app = express();




// middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.use(require("./routes"));
app.use(express.static('./public'));

app.use((req, res, next) => {
  const error = new Error('404 not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  console.log('Error', error);

  if (error.status) {
    return res.status(error.status).send(`<h1>${error.message}</h1>`);
  }

  res.status(500).send(`<h1>Something went wrong</h1>`);
});



app.listen(5000, () => {
  console.log("Server is running on port 5000");
})