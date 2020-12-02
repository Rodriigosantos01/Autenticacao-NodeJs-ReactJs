const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/controllers/index')(app);

app.listen(port, () => {
    console.log("API in port: " + port);
});