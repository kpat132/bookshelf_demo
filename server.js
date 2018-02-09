const express = require('express');
const bodyParser = require('body-parser');

const userRoute = require('./routes/users');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users',userRoute);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})