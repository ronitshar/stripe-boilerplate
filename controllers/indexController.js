exports.homePage = (req, res) => {
    res.render('index', { title: 'Your title here!' });
}

exports.register = (req, res) => {
    res.render('register')
}