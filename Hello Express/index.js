const express = require("express");

const app = express();

app.get('/', (req, res) => {
  res.send(
    `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .container{
      width: 50%;
      margin: 2rem auto;
      background-color: #ddeeee;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Nodemon is a life saver</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse architecto placeat nulla odio eos deserunt cumque quam mollitia itaque dicta pariatur, modi molestias numquam error nobis laudantium voluptatum voluptatibus est tempora ad? Ratione minus saepe ipsam maiores animi quis. Reiciendis nostrum ex officiis ipsum dolore aliquam, soluta ut laboriosam tempora itaque repellat qui assumenda temporibus quasi, totam et error sed porro minus debitis quas minima nemo hic? Temporibus voluptatem fugiat eaque, saepe veniam, deserunt necessitatibus explicabo dolores sunt voluptatum dolorum pariatur reiciendis error quaerat ea vel sint maxime itaque officia minus culpa totam! Dolorem, ab in labore expedita at maiores.</p>
  </div>
</body>
</html>
    `
  )
})

app.listen(5000, () => {
  console.log("Server is running on port 5000");
})