const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

mongoose.connect('mongodb://litman:litman@ds121015.mlab.com:21015/express-boilerplate');

const db = mongoose.connection;

mongoose.connection.on('err', err => {
    console.log(`Error !!! ${err}`)
});

require('dotenv').config();

app.set('view engine', 'pug')
app.set('views', path.join(__dirname + '/views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(expressValidator());

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