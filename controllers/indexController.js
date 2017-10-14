exports.homePage = (req, res) => {
    res.render('index', { title: 'Your title here!' });
}

exports.login = (req, res) => {
    res.render('login')
}