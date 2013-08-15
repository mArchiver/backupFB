module.exports = function(app){



    var user = require('./controllers/user');

    app.get('/', user.home);

    app.get('/me', user.showMe);
    app.get('/login/callback', user.loginCallback);


};
