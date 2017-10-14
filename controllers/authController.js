exports.login = (req, res, next) => {
    res.send(`Username: ${req.body.username}, password: ${req.body.password}`);
};
