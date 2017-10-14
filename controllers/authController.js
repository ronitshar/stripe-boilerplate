const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
const User = require('../models/User');

exports.login = (req, res, next) => {
    res.send(`Username: ${req.body.username}, password: ${req.body.password}`);
};

exports.validateRegister = async (req, res, next) => {
    let fullname = req.body.fullname;
    let email = req.body.email;
    let password = req.body.password;
    let confirmPassword = req.body.password2;

    req.checkBody('fullname', 'Name is required!').notEmpty();
    req.checkBody('email', 'Email is required!').notEmpty();
    req.checkBody('email', 'Email is not valid!').isEmail();
    req.checkBody('password', 'Password is required!').notEmpty();
    req.checkBody('password2', 'Passwords must match!').equals(req.body.password);

    let errors = req.validationErrors();
    let returnedErrors = [];
    if (errors) {
        for(let i = 0; i < errors.length; i++) {
            returnedErrors.push(errors[i].msg)
        }
        res.render('register', { fullname, email, password, confirmPassword, returnedErrors });
    } else {
        let newUser = new User({
            password: password,
            email: email,
            name: fullname
        });
        fullname = req.sanitize('fullname').trim();
        email = req.sanitize('email').trim();
        password = req.sanitize('password').trim();
        console.log("passed");
        User.createUser(newUser, function(err, user) {
            if(err) throw err;
            console.log(user);
        })
        next();
    }
};

exports.login = (req, res) => {
    req.flash('info', 'hello');
    res.render('login');
}