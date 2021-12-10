const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('Hello home page');
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
