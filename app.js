const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

require('dotenv').config();

app.set('view engine', 'pug')
app.set('views', path.join(__dirname + '/views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const routes = require('./routes/index');  
app.use('/', routes); 

app.listen(process.env.PORT, (err) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log(`Listening on port ${process.env.PORT}`);
    }
});